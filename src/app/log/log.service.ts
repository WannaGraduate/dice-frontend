import { Injectable } from '@angular/core';
import { Log } from './models/log.model';

@Injectable()
export class LogService {
  logs = [
      {
          id: '1',
          name: '테스트',
          desc: '테스트',
      },
      {
          id: '2',
          name: '테스트4444',
          desc: '테스트',
      },
      {
          id: '3',
          name: '테스트3333',
          desc: '테스트',
      },
      {
          id: '4',
          name: '테스트2222',
          desc: '테스트',
      },
  ];

  constructor() { }

  getAll(): Log[] {
      return this.logs;
  }
}
