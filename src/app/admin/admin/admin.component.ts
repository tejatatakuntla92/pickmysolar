import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserListService} from '../../user-list.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usersList=[];
  displayedColumns: string[] = ['name', 'userName', 'role','actions'];
  userslist: any;
  currentUser: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UserListService:UserListService
  ) { }
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.UserListService.userList = JSON.parse(localStorage.getItem('usersList'));
    this.getTableData();
  }
  getTableData(){
    this.usersList=[];
    this.userslist = JSON.parse(localStorage.getItem('usersList'));
    this.userslist.forEach(element => {
      this.usersList.push({name:element.firstName+' '+element.lastName, userName:element.userName, role:element.role})
    });
  }
  EditUser(row){
    this.userslist.forEach(element => {
      if(element.userName == row.userName){
        localStorage.setItem('editUser',JSON.stringify(element));
        this.router.navigate(['./admin/edit'])
      }
    });
  }
  deleteUser(row){
    this.UserListService.userList.forEach((element,index) => {
      if(element.userName == row.userName){
        this.UserListService.userList.splice(index,1);
      }
    });
    localStorage.setItem('usersList',JSON.stringify(this.UserListService.userList));
    this.getTableData();
  }
  createUser(){
    this.router.navigate(['./admin/edit',{isCreate:'true'}])
  }
  viewUser(row){
    this.userslist.forEach(element => {
      if(element.userName == row.userName){
        localStorage.setItem('editUser',JSON.stringify(element));
      }
    });
    if(row.role == 'admin'){
      this.router.navigate(['./admin/profile'])
    } else if(row.role == 'student'){
      this.router.navigate(['./student',{isAdmin:'true'}])
    } else if(row.role == 'teacher'){
      this.router.navigate(['./teacher',{isAdmin:'true'}])
    }
  }
  logOut(){
    this.router.navigate(['./'])
  }
}
