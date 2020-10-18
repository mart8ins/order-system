import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (state.url != '/login') {
      let loginStatus = this.auth.isLoggedIn(); // no auth.service iegūstam true vai false par to vai ielogojies ir

      if (!loginStatus.status) {
        this.router.navigateByUrl('/login');
        return false;
      } else {
        return true;
      }

    } else {
      return true;
    }
  }
}

/*
No auth.service tiek iegūta true vai false vērtība, ja ir true, tad lietotājam ir atļauts piekļūt citām komponentēm, ja false, tad nē un tiek
pārvirzīts atpakaļ uz login komponenti
*/
