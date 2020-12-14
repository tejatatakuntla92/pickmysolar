import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isIncorrect = false;
  isNoUsers: boolean;
  constructor(
    private UserListService:UserListService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  role ={
    Admin:'admin', Teacher:'teacher',Student:'student'
  };
  ngOnInit(): void {
    localStorage.removeItem('currentUser');
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  onSubmit(){
    let list = JSON.parse(localStorage.getItem('usersList'));
    let num = 0;
    this.isIncorrect = false;
    if(list.length == 0){
      this.isNoUsers = true;
    } else {
      this.isNoUsers = false;
    }
    list.forEach(element=>{
      if((element.userName === this.loginForm.value.userName) && (element.password === this.loginForm.value.password)){
        let role = element.role;
        localStorage.setItem('currentUser', JSON.stringify(element));
        if(role === this.role.Admin){
          this.router.navigate(['./admin/profile'])
        } else if(role === this.role.Teacher){
          this.router.navigate(['./teacher'])
        } else {
          this.router.navigate(['./student'])
        }
        this.isIncorrect = false;
    } else{
      num = num+1;
      if(num == list.length){
      this.isIncorrect = true;
    }
    }
    })
  }
}
