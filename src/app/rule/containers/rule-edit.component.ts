import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RuleService } from '../rule.service';
import { Rule, RuleForm } from '../models/rule.model';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-rule-edit',
  templateUrl: './rule-edit.component.html',
  styleUrls: ['./rule-edit.component.scss']
})
export class RuleEditComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  data: Rule;
  editId: string;

  constructor(
    public ruleService: RuleService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$))
    .subscribe(async (params) => {
      this.data = await this.ruleService.getOne(params['id']);
      this.editId = params['id'];
    });
  }

  submit(data: RuleForm): void {
    this.ruleService.edit(this.editId, data);
    this.router.navigate(['/rules']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
