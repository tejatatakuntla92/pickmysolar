import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  currentUser:any;
  isAdmin: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['isAdmin'] == 'true'){
      this.isAdmin = true;
      this.currentUser = JSON.parse(localStorage.getItem('editUser'));
    } else{
      this.isAdmin = false;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
  logOut(){
    this.router.navigate(['./'])
  }
}
