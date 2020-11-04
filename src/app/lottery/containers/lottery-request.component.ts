import { Component, OnInit } from '@angular/core';
import { Rule } from 'src/app/rule/models/rule.model';
import { RuleService } from 'src/app/rule/rule.service';
import { LotteryService } from '../lottery.service';

@Component({
  selector: 'app-lottery-request',
  templateUrl: './lottery-request.component.html',
  styleUrls: ['./lottery-request.component.scss']
})
export class LotteryRequestComponent implements OnInit {
  ruleList: Rule[];
  selected: any;
  result = 0;

  constructor(
    public lotteryService: LotteryService,
    public ruleService: RuleService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.ruleList = await this.ruleService.getAll();
  }

  async get(): Promise<void> {
    this.result = 100;
    this.result = await this.lotteryService.get('14f4a376-8b76-409c-b0ee-18faebf8e42f');
  }

}
