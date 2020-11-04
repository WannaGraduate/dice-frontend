import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RuleService } from '../rule.service';
import { RuleForm } from '../models/rule.model';

@Component({
  selector: 'app-rule-add',
  templateUrl: './rule-add.component.html',
  styleUrls: ['./rule-add.component.scss']
})
export class RuleAddComponent implements OnInit {
  constructor(
    public ruleService: RuleService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async submit(data: RuleForm): Promise<void> {
    await this.ruleService.add(data);
    this.router.navigate(['/rules']);
  }

}
