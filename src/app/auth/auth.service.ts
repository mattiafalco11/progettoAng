import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  currentUser!: User;

  constructor() { }

  isAuthenticated(){
    return this.isLoggedIn;
  }
}
