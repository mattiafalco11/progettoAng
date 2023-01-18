import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Gender } from './../../model/gender';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  users!: User[];
  display: boolean = false;
  @ViewChild(Table) userTable!: Table;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    return this.userService.getUsers().subscribe(
        { next: res => this.users = res.users }
    );
  }
  showDialog() {
    this.display = true;
  }
  hideDialog(user: User){
    this.users.push(user)
    this.display = false;
    this.userTable.reset();
  }
}
