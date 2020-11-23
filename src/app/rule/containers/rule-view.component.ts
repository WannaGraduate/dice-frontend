import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RuleService } from '../rule.service';
import { Item, ItemForm, Rule } from '../models/rule.model';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../../user/user.service';
import { User } from '../../user/models/user.model';
import * as vrf from 'ecvrf';
import * as BN from 'bn.js';

@Component({
  selector: 'app-rule-view',
  templateUrl: './rule-view.component.html',
  styleUrls: ['./rule-view.component.scss'],
})
export class RuleViewComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  data: Rule;
  secretKey: string;
  proof: string;
  viewId: string;
  alpha: string;
  token: string;
  result: Item;
  hash: string;
  hashNumMod: number;
  lasttime: string;
  user: User;
  success: boolean;
  error: boolean;

  constructor(
    public ruleService: RuleService,
    public userService: UserService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    await this.userService.getAll();
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async (params) => {
        this.data = await this.ruleService.getOne(params['id']);
        this.viewId = params['id'];
      });
    this.user = this.userService.selected;
  }

  async addItem(data: ItemForm): Promise<void> {
    await this.ruleService.addItem(this.viewId, data);
    this.data = await this.ruleService.getOne(this.viewId);
  }

  async getAlpha(): Promise<void> {
    this.lasttime = new Date().toUTCString();
    const res = await this.ruleService.getAlpha(this.viewId, this.user.id);
    this.alpha = res.alpha;
    this.token = res.token;
  }

  generateProofHash(): void {
    this.proof = vrf.prove(this.secretKey, this.alpha);
    this.hash = vrf.proof_to_hash(this.proof);
    this.hashNumMod = new BN(this.hash, 'hex').modn(this.data.items.reduce((sum, x) => sum + x.prob, 0));
    let w = 0;
    for (const item of this.data.items) {
      w += item.prob;
      if (w > this.hashNumMod) {
        this.result = item;
        return;
      }
    }
  }

  async sendProof(): Promise<void> {
    this.error = false;
    this.success = false;
    const res = await this.ruleService
      .proof(this.viewId, this.user.id, {
        token: this.token,
        proof: this.proof
      });
    if (!res) {
      this.error = true;
    }
    else {
      this.success = true;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async onDelete(id: string): Promise<void> {
    await this.ruleService.deleteItem(this.viewId, id);
    this.data = await this.ruleService.getOne(this.viewId);
  }
}
