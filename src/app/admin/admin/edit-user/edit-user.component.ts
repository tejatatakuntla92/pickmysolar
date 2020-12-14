import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {UserListService} from '../../../user-list.service';
interface Roles {
  value: string;
  label: string;
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  isCreate = false;

  constructor(
    private UserListService:UserListService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  roles: Roles[] = [
    {value: 'admin', label: 'Admin'},
    {value: 'teacher', label: 'Teacher'},
    {value: 'student', label: 'Student'}
  ];
  ngOnInit(): void {
    this.UserListService.userList = JSON.parse(localStorage.getItem('usersList'));
    if(this.route.snapshot.params['isCreate'] == 'true'){
      this.isCreate = true;
      this.editForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        role: new FormControl('', [Validators.required]),
        userName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      });
    } else {
      this.isCreate = false;
    let userDetails = JSON.parse(localStorage.getItem('editUser'));
    this.editForm = new FormGroup({
      firstName: new FormControl(userDetails.firstName, [Validators.required]),
      lastName: new FormControl(userDetails.lastName, [Validators.required]),
      role: new FormControl(userDetails.role, [Validators.required]),
      userName: new FormControl(userDetails.userName, [Validators.required]),
      password: new FormControl(userDetails.password, [Validators.required])
    });
  }
  }

  onSubmit(){
    if(this.isCreate == false){
    this.UserListService.userList.forEach(element => {
      if(element.userName === this.editForm.value.userName){
        Object.assign(element, this.editForm.value);
      } 
    });
  } else if(this.isCreate == true){
   
      this.UserListService.userList.push(this.editForm.value);
    }
    localStorage.setItem('usersList', JSON.stringify(this.UserListService.userList))
    this.router.navigate(['./admin']);
  }
  logOut(){
    this.router.navigate(['./'])
  }
}
