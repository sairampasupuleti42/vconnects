import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  LOCALHOST = 'http://localhost:82/connects/api/';
  REMOTE_HOST = 'https://projectr.in/c/api/';
  constructor(private http: HttpClient) {
  }
  signIn(user) {

    return this.http.post(this.LOCALHOST + 'user/login', user).pipe(catchError((error: any) => throwError(error.message)));
  }
}
