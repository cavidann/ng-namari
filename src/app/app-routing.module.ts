import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimoinalsComponent } from './testimoinals/testimoinals.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouteguardService } from './routeguard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Contactus', component: ContactusComponent, outlet: 'popup' },
  { path: 'About', component: IntroComponent },
  { path: 'Services', component: ContentComponent },
  { path: 'Testimoinals', component: TestimoinalsComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Subscribe', component: SubscribeComponent, outlet: 'popup' },
  { path: 'Dashboard', loadChildren: () => UserDashboardModule, canActivate: [RouteguardService] },
  { path: 'Blog', component: BlogComponent, canActivate: [RouteguardService] },
  // { path: 'Blog', component: BlogComponent },
  { path: 'Article/:id', component: ArticleComponent },
  { path: 'Article-edit/:id', component: ArticleEditComponent, canActivate: [RouteguardService] },
  { path: 'Article-create', component: ArticleCreateComponent, canActivate: [RouteguardService] },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
