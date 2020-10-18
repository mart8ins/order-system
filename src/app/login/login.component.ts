import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dataSharing: DataSharingService) { }

  admin = {
    username: 'admin',
    password: 'admin'
  }

  status = {
    loginFailed: false,
    loginFailMessage: 'Wrong login data'
  }

  loginOrders($event, user: string, password: string) {
    $event.preventDefault();
    // input vērtības
    let userName = user;
    let userPassword = password;

    // salīdzinam input vērtības ar admin objekta vērtībām, ja sakrīt tad nostorojam datus iekš session storage un lietotājs tiek apskatīt
    // citas komponentes

    if (userName != this.admin.username && userPassword != this.admin.password) {
      this.status.loginFailed = true;
      sessionStorage.clear();

    } else {
      this.status.loginFailed = false;
      this.dataSharing.isUserLoggedIn.next(true);
      sessionStorage.setItem('username', this.admin.username);
      sessionStorage.setItem('password', this.admin.password);
      this.router.navigateByUrl('/place-order');
    }
  }
  ngOnInit(): void {

  }
}
