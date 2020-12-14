import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserListService } from '../../user-list.service';

import { Router, ActivatedRoute } from '@angular/router';
interface Roles {
  value: string;
  label: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  roles: Roles[] = [
    {value: 'admin', label: 'Admin'},
    {value: 'teacher', label: 'Teacher'},
    {value: 'student', label: 'Student'}
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UserListService:UserListService
  ) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  onSubmit(){
    this.UserListService.userList.push(this.registrationForm.value);
    localStorage.setItem('usersList', JSON.stringify(this.UserListService.userList))
    this.router.navigate(['./']);
  }
}
