import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, UserForm } from './models/user.model';

@Injectable()
export class UserService {
  selected: User = null;
  users: User[];

  constructor(private http: HttpClient) {}

  async getAll(): Promise<any> {
    this.users = await this.http
      .get<User[]>(`${environment.apiAddress}/users`)
      .toPromise();
    return;
  }

  async add(data: UserForm): Promise<any> {
    return this.http
      .post<{}>(`${environment.apiAddress}/users`, data)
      .toPromise();
  }

  async delete(id: string): Promise<any> {
    return this.http
      .delete<{}>(`${environment.apiAddress}/users/${id}`)
      .toPromise();
  }
}
