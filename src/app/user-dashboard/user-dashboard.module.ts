import { NgModule } from '@angular/core';
// import { RouterModule , Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
//   { path: 'Dashboard', component: UserDashboardComponent},
// ];


@NgModule({
  imports: [
    CommonModule,
    UserDashboardRoutingModule
    // RouterModule.forRoot(routes)
  ],
  declarations: [UserDashboardComponent, UserProfileIconComponent],
  exports: [UserDashboardComponent, UserProfileIconComponent]
})
export class UserDashboardModule { }
