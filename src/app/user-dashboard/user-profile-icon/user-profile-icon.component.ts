import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-user-profile-icon',
  templateUrl: './user-profile-icon.component.html',
  styleUrls: ['./user-profile-icon.component.css']
})
export class UserProfileIconComponent implements OnInit {

  @Input() profileImage: string;

  constructor(
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

}
