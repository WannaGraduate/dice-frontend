import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';
import { Rule } from '../models/rule.model';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit {
  ruleList: Rule[];

  constructor(
    public ruleService: RuleService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.ruleList = await this.ruleService.getAll();
  }

  async onDelete(id: string): Promise<void> {
    this.ruleService.delete(id);
    this.ruleList = await this.ruleService.getAll();
  }

}
