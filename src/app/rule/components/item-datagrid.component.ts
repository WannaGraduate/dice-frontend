import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/rule.model';

@Component({
  selector: 'app-item-datagrid',
  templateUrl: './item-datagrid.component.html',
  styleUrls: ['./item-datagrid.component.scss']
})
export class ItemDatagridComponent implements OnInit {
  @Input() data: Item[];
  @Output() delete = new EventEmitter<string>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(id: string): void {
    this.delete.emit(id);
  }

}
