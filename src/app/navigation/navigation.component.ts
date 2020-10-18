import { Component, OnInit } from '@angular/core';
// lai pēc logina automātiski parādītos navigācijas pogas
import { DataSharingService } from '../services/data-sharing.service';
// lai pēc pašrocīga refresh navigācijas pogas paliktu, jo ar DataSharingService tās pazūd
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isUserLoggedIn: boolean;
  constructor(private dataSharing: DataSharingService, private auth: AuthService) {
    this.dataSharing.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    })
  }

  isLoggedIn = () => {
    let authObj = this.auth.isLoggedIn();
    this.isUserLoggedIn = authObj.status;
  }

  logout = () => {
    console.log("logout")
    sessionStorage.clear();
    let authObj = this.auth.isLoggedIn();
    this.isUserLoggedIn = authObj.status;

  }


  ngOnInit(): void {
    this.isLoggedIn();
  }


}
