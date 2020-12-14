import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
 userList= JSON.parse(localStorage.getItem('usersList'));
  //userList= [];
  constructor() { }
}
