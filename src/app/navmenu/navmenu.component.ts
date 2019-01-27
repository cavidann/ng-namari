import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  @Input() menu: any;
  @Input() menuOpen: boolean;
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  changeStatus() {
    this.toggleMenu.emit(!this.menuOpen);
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
  }

}
