import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  registrationError: boolean;

  ngOnInit(): void {
  }

  generateUserId() {
    let id = Math.floor(Math.random() * 1000);
    return id;
  }



  newUser(forma) {
    let usernameValidation = new RegExp('^[A-Za-z0-9]{0,10}$');
    let passwordValidation = new RegExp('^[A-Za-z0-9]{6,}$');

    if (usernameValidation.test(forma.form.value.username) && passwordValidation.test(forma.form.value.password)) {
      let user = {
        id: this.generateUserId(),
        username: forma.form.value.username,
        password: forma.form.value.password
      };
      /* create a new user in localStorage*/
      this.auth.registerNewUser(user);
      this.router.navigateByUrl('/place-order');
      this.registrationError = false;
    } else {
      this.registrationError = true;
    }
  }


}
