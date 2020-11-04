import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Log } from '../models/log.model';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {
  logList: Log[];

  constructor(
    public logService: LogService,
  ) { }

  ngOnInit(): void {
    this.logList = this.logService.getAll();
  }

}
