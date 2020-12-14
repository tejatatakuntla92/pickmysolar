import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot){
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(user.role == 'admin'){
      return true;
    }
    this.router.navigate(['./'])
    return false;
  }
}
