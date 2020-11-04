import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../models/log.model';

@Component({
  selector: 'app-log-datagrid',
  templateUrl: './log-datagrid.component.html',
  styleUrls: ['./log-datagrid.component.scss']
})
export class LogDatagridComponent implements OnInit {
  @Input() data: Log[];

  constructor() { }

  ngOnInit(): void {
  }

}
