import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { GetUsersResponse } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url!: string;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<GetUsersResponse>{
    return this.http.get<GetUsersResponse>("https://dummyjson.com/users");
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>("https://dummyjson.com/users/" + id);
  }
}
