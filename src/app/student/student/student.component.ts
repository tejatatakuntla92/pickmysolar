import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  currentUser:any;
  isAdmin = false;
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
