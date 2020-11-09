import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataMenuService {

  constructor( private http: HttpClient ) { }

  getMenuOpts() {
    return this.http.get<Menu[]>('/assets/data/menu.json');
  }

}
