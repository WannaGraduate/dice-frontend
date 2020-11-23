import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-datagrid',
  templateUrl: './user-datagrid.component.html',
  styleUrls: ['./user-datagrid.component.scss']
})
export class UserDatagridComponent implements OnInit {
  @Input() data: User[];
  @Output() selectUser = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelect(id: string): void {
    this.selectUser.emit(id);
  }

  onDelete(id: string): void {
    this.delete.emit(id);
  }

}
