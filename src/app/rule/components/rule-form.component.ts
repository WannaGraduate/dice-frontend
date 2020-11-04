import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Rule, RuleForm } from '../models/rule.model';

@Component({
  selector: 'app-rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent implements OnInit {
  @Input() set data(value: Rule) {
    this.editId = value.id;
    this.formGroup = new FormGroup({
      name: new FormControl([value.name]),
    });
  }
  @Output() output = new EventEmitter<RuleForm>();

  formGroup: FormGroup;
  editId: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.editId) {
      this.formGroup = new FormGroup({
        name: new FormControl(['']),
      });
    }
  }

  save(): void {
    this.output.emit({
      name: this.formGroup.controls['name'].value,
    });
  }

}
