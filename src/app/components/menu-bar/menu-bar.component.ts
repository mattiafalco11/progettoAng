import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit{
  items!: MenuItem[];
  display!: boolean;

  ngOnInit() {
    this.items = [
      {
        label: 'Profile' 
      },
      {
        label: 'Log Out',
        routerLink: '/login'
      }
    ];
  }
}
