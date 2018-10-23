import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';
import { interval, asyncScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private _http: HttpClient) { }

  getUsers() {

    let since = 1;
    return interval(10000, asyncScheduler)
            .pipe(
              switchMap(() => this._http.get(`https://api.github.com/users?since=${since}`)),
              map((users: Array<any>) =>  {
                since = since + 1;
                return users.map(x => ({userName: x.login, avatar: x.avatar_url}));
              }),
              tap(console.log)
            );
  }
}
