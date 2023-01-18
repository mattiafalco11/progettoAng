import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from 'src/app/model/gender';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  @Output() displayEvent = new EventEmitter<User>();

  users!: User[];
  genders!: Gender[];

  constructor(private userService: UserService, private formBuilder: FormBuilder,) {
    this.genders = [
      {name: "Male", value: "male"},
      {name: "Female", value: "female"}
    ];
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  public userForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    age: ['', [Validators.required, Validators.min(1), Validators.max(150)]],
    gender: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
  })

  onSubmit(){
    let user = {
      id: this.users.length + 1,
      firstName: this.userForm.get('name')?.value,
      lastName: this.userForm.get('lastName')?.value,
      age: this.userForm.get('age')?.value,
      gender: this.userForm.get('gender')?.value,
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
    };
    this.displayEvent.emit(user);
  }

  getAllUsers(){
    return this.userService.getUsers().subscribe(
        { next: res => this.users = res.users }
    );
  }
}
