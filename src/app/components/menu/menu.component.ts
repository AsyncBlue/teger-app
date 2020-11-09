import { Component, OnInit } from '@angular/core';
import { DataMenuService } from '../../services/data-menu.service';
import { Observable } from 'rxjs';
import { Menu } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu: Observable<Menu[]>;

  constructor( private menuService: DataMenuService ) { }

  ngOnInit() {
    this.menu = this.menuService.getMenuOpts();
  }

}
