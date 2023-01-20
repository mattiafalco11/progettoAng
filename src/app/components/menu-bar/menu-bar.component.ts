import { Component, OnInit } from '@angular/core';
import { _isClickEvent } from 'chart.js/dist/helpers/helpers.core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit{
  items!: MenuItem[];
  display!: boolean;

  constructor(){}

  ngOnInit() {
    this.items = [
      {
        label: 'Profile',
        routerLink: '/profile'
      },
      {
        label: 'Log Out',
        routerLink: '/login',
      }
    ];
  }
}
