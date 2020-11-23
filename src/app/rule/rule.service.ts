import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Item, ItemForm, ProofForm, RuleForm } from './models/rule.model';

@Injectable()
export class RuleService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
      return this.http
      .get<{ rules: any[] }>(
        `${environment.apiAddress}/rules`,
      )
      .pipe(
          map(res => {
              return res;
          }),
      ).toPromise();
  }

  async getOne(id: string): Promise<any> {
      return this.http
      .get<{ rules: any[] }>(
        `${environment.apiAddress}/rules/${id}`,
      )
      .pipe(
          map(res => {
              return res;
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

  async proof(id: string, data: ProofForm): Promise<Item> {
    return this.http.post<Item>(
        `${environment.apiAddress}/rules/${id}/lottery`,
        data,
    ).toPromise();
  }

  edit(id: string, data: RuleForm): void {
  }

  async delete(id: string): Promise<any> {
    return this.http.delete<{ }>(
        `${environment.apiAddress}/rules/${id}`,
    ).toPromise();
  }

  async deleteItem(ruleId: string, itemId: string): Promise<any> {
    return this.http.delete<{ }>(
        `${environment.apiAddress}/rules/${ruleId}/items/${itemId}`,
    ).toPromise();
  }
}
