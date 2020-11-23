import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, UserForm } from './models/user.model';

@Injectable()
export class UserService {
  selected = new Subject<User>();

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
      return this.http
      .get<{ users: any[] }>(
        `${environment.apiAddress}/users`,
      )
      .pipe(
          map(res => {
              return res;
          }),
      ).toPromise();
  }

  async add(data: UserForm): Promise<any> {
    return this.http.post<{ }>(
        `${environment.apiAddress}/users`,
        data,
    ).toPromise();
  }

  async delete(id: string): Promise<any> {
    return this.http.delete<{ }>(
        `${environment.apiAddress}/users/${id}`,
    ).toPromise();
  }
}
