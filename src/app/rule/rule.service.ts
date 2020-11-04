import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Item, ItemForm, RuleForm } from './models/rule.model';

@Injectable()
export class RuleService {
  rules = [
      {
          id: '1',
          name: '테스트',
      },
      {
          id: '2',
          name: '테스트4444',
      },
      {
          id: '3',
          name: '테스트3333',
      },
      {
          id: '4',
          name: '테스트2222',
      },
  ];

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
      return this.http
      .get<{ rules: any[] }>(
        `${environment.apiAddress}/rules`,
      )
      .pipe(
          map(data => {
              return data;
          }),
      ).toPromise();
  }

  async getOne(id: string): Promise<any> {
      return this.http
      .get<{ rules: any[] }>(
        `${environment.apiAddress}/rules/${id}`,
      )
      .pipe(
          map(data => {
              return data;
          }),
      ).toPromise();
  }

  async add(data: RuleForm): Promise<any> {
    return this.http.post<{ }>(
        `${environment.apiAddress}/rules`,
        data,
    ).toPromise();
  }

  async addItem(id: string, data: ItemForm): Promise<any> {
    return this.http.post<{ }>(
        `${environment.apiAddress}/rules/${id}/items`,
        data,
    ).toPromise();
  }

  async lottery(id: string): Promise<Item> {
    return this.http.post<Item>(
        `${environment.apiAddress}/rules/${id}/lottery`,
        {},
    ).toPromise();
  }

  edit(id: string, data: RuleForm): void {
      const target = this.rules.find(x => x.id === id);
      this.rules[this.rules.indexOf(target)] = {
          ...data,
          id,
      }
  }

  delete(id: string): void {
    this.rules = [...this.rules.filter(x => x.id !== id)];
  }
}
