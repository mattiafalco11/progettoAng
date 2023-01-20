import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from './../../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  users!: User[];

  constructor(
    private userService: UserService, 
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.authService.isLoggedIn = false;
    this.getAllUsers();
  }

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  })
  submitForm() {
    
  }
  get username() {
    return this.loginForm.get('username')
  }

  get password() {

    return this.loginForm.get('password')

  }

  getAllUsers() {
    return this.userService.getUsers().subscribe(
      {
        next: res => this.users = res.users
      }
    )
  }
  submit(){
    const usernameForm = this.loginForm.get('username')?.value;
    const passwordForm = this.loginForm.get('password')?.value;
    if(this.users.find((user) => user.username == usernameForm && user.password == passwordForm)){
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Correct data', life: 3000});
      this.router.navigate(['home']);
      this.authService.isLoggedIn = true;
      this.authService.currentUser = this.users.find(user => user.username == usernameForm && user.password == passwordForm)!;
    }else{
      this.messageService.add({severity:'error', summary: 'Error', detail: 'User not found', life: 3000});
    }
  }
}