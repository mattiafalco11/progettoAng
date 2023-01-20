import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Gender } from 'src/app/model/gender';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users!: User[];
  display: boolean = false;
  editDialog!: boolean;
  submitted!: boolean;
  user!: User;
  genders!: Gender[];
  @ViewChild(Table) userTable!: Table;

  constructor(private userService: UserService, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.genders = [
      {name: "Male", value: "male"},
      {name: "Female", value: "female"}
    ];
   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    return this.userService
      .getUsers()
      .subscribe({ next: (res) => (this.users = res.users) });
  }
  showDialog() {
    this.display = true;
  }
  hideDialog(user: User) {
    this.users.push(user);
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Succesfull Added', life: 3000});
    this.display = false;
    this.userTable.reset();
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.userTable.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  confirm(userId: number){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          this.delete(userId);
          this.getAllUsers();
      }
  });
  }
  delete(userId: number) {
    this.userService.deleteUser(userId).subscribe(() =>{
      next: () => {
        this.getAllUsers();
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
      }
      error: this.messageService.add({severity:'error', summary: 'Error', detail: 'User not Deleted', life: 3000});
      }
    );
  }


  editUser(user: User){
    this.user = {...user};
    this.editDialog = true;
  }
  hideDialogEdit() {
    this.editDialog = false;
    this.submitted = false;
  }
  saveProduct() {
    this.submitted = true;
    
    this.users[this.findIndexById(this.user.id)] = this.user;
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
  
    this.users = [...this.users];
    this.editDialog = false;
  }
  findIndexById(id: number): number {
  let index = -1;
  for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}

}
