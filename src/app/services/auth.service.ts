import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /* check if user is already logged in */
  isLoggedIn = () => {
    let password = sessionStorage.getItem('password');
    let username = sessionStorage.getItem('username');


    if (username && password) {
      return {
        status: true,
        user: {
          username,
          password
        }
      }
    } else {
      return {
        status: false
      };
    }
  }

  registerNewUser = (user: Object) => {

    let users = [];

    // getting existing registered users
    let existingUsers = JSON.parse(localStorage.getItem('Users'));
    if (existingUsers) {
      for (let i = 0; i < existingUsers.length; i++) {
        users.push(existingUsers[i])
      }
    }
    //adding new user to already existing user list
    users.push(user);

    // updating localStorage
    localStorage.setItem('Users', JSON.stringify(users));
  }


}

/* šis serviss atgriež klasi, kas atgriež ar funkcijas palīdzību true vai false (konkrētāk šajā gadījumā iekš objekta),
ko izmanto iekš guard. atkarībā no tā, vai session storage nostorojās eksistējoši
login dati, ja atgriež true, tad lietotājam ir iespēja redzēt citas komponentes, papildus login komponentei  */