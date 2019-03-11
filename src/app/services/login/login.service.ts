import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  // public login(): Observable {
  //   return this.http.get('http://localhost:8000/login/').pipe(
  //     map(
  //       (jsonArray: Object[]) => jsonArray.map(jsonItem => console.log(jsonItem)),
  //     ),
  //   );
  // }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8000/user/');
  }

  public login(username: string, password: string): Observable<any> {
    const user = new User(username, password);
    return this.http.post<any>('http://localhost:8000/login/', user);
  }
}
