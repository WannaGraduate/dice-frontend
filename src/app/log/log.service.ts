import { Injectable } from '@angular/core';
import { Log } from './models/log.model';

@Injectable()
export class LogService {

  constructor() { }

  getAll(): Log[] {
      return [];
  }
}
