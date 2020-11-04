import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RuleService } from '../rule.service';
import { Item, ItemForm, Rule } from '../models/rule.model';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-rule-view',
  templateUrl: './rule-view.component.html',
  styleUrls: ['./rule-view.component.scss']
})
export class RuleViewComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  data: Rule;
  viewId: string;
  result: Item;

  constructor(
    public ruleService: RuleService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$))
    .subscribe(async (params) => {
      this.data = await this.ruleService.getOne(params['id']);
      this.viewId = params['id'];
    });
  }

  async addItem(data: ItemForm): Promise<void> {
    await this.ruleService.addItem(this.viewId, data);
    this.data = await this.ruleService.getOne(this.viewId);
  }

  async lottery(): Promise<void> {
    this.result = await this.ruleService.lottery(this.viewId);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
