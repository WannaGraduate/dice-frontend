import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Rule } from '../models/rule.model';

@Component({
  selector: 'app-rule-datagrid',
  templateUrl: './rule-datagrid.component.html',
  styleUrls: ['./rule-datagrid.component.scss']
})
export class RuleDatagridComponent implements OnInit {
  @Input() data: Rule[];
  @Output() delete = new EventEmitter<string>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  view(id: string): void {
    this.router.navigate([`/rules/${id}/view`]);
  }

  onEdit(id: string): void {
    this.router.navigate([`/rules/${id}/edit`]);
  }

  onDelete(id: string): void {
    this.delete.emit(id);
  }

}
