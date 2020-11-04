import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class LotteryService {

  constructor(private http: HttpClient) { }

  async get(id: string): Promise<number> {
    return this.http.post<{ result: number }>(
        `${environment.apiAddress}/rules/${id}/lottery`,
        {},
    )
    .pipe(
      map(data => {
          return data.result;
      }),
    ).toPromise();
  }
}
