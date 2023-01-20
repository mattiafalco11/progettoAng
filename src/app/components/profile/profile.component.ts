import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from './../../auth/auth.service';
import { Gender } from 'src/app/model/gender';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currUser!: User;
  user!: User;
  users!: User[];
  editUser = false;
  submitted = false;
  genders!: Gender[];

  constructor(private authService: AuthService, private messageService: MessageService, private userService: UserService){}

  ngOnInit(){
    this.getAllUsers();
    this.currUser = this.authService.currentUser;
    this.genders = [
      {name: "Male", value: "male"},
      {name: "Female", value: "female"}
    ]
  }
  getAllUsers() {
    return this.userService
      .getUsers()
      .subscribe({ next: (res) => (this.users = res.users) });
  }

  saveUser() {
    this.users[this.currUser.id] = this.user;
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
  
    this.users = [...this.users];
    this.editUser = false;
  }
}
