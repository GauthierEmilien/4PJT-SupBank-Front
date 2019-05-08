import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public login(user: User): Observable<any> {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Accept', 'application/json');
    // headers = headers.append('zumo-api-version', '2.0.0');
    // const u = new User(user.pseudo, user.password);
    // return this.http.post<any>('http://localhost:8000/login/', user, {headers});
    return this.http.post<any>('http://localhost:8000/login/', user);
  }

  public register(user: User): Observable<any> {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Accept', 'application/json');
    // headers = headers.append('zumo-api-version', '2.0.0');
    // const user = new User(username, password);
    // return this.http.post<any>('http://localhost:8000/login/', user, {headers});
    return this.http.post<any>('http://localhost:8000/user', user);
  }
}
