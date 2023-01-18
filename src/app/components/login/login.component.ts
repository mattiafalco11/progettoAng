import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  users!: User[];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
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
}