import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 
  user={
    role:'ADMIN',
  
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(next.data[0]== this.user.role ){
      return true;
    }
    else{
      return false;
  }
}
}

 /* if (this.users.findIndex((user) => user.username === username && user.password === password) !== -1) {
    return true;
  }
  return false;
}*/