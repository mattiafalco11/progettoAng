import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit{
  items!: MenuItem[];

  home!: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Users', routerLink: '/home/users'},
      ];

      this.home = {icon: 'pi pi-home', routerLink: '/home'};
  }
}
