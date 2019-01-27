import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigService } from '../config.service';
import { AuthenticationService } from '../authentication.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterContentChecked {

  menu: any;
  database =  'menu';
  menuOpen: boolean;
  user: any;
  profileImage: string;

  constructor(
    private config: ConfigService,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.getMenu(this.database);
    this.menuOpen = false;
    this.getUser();
  }

  ngAfterContentChecked() {
    of(this.auth.isLoggedIn()).subscribe(
      () => {
        this.getUser();
      }
    );
  }

  getMenu(database) {
    this.config.getSettings(database).subscribe(
      settings => {
        this.menu = settings;
      }
    );
  }

  toggleMenu(status: boolean) {
    this.menuOpen = status;
  }


  getUser() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      if (this.user.image) {
        this.profileImage = this.user.image;
      } else {
        this.profileImage = 'default-user.jpg';
      }
    } else {
      this.profileImage = 'default-user.jpg';
    }
  }

}
