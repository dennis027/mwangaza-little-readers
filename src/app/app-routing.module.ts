import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import {JoinUsComponent} from './join-us/join-us.component'
import {ProjectsComponent} from './projects/projects.component'
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FooterComponent} from './footer/footer.component';
import{TesterComponent} from './tester/tester.component';
const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'whoweare',component:WhoWeAreComponent},
  {path:'joinus',component:JoinUsComponent} ,
  {path:'projects',component:ProjectsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'footer',component:FooterComponent},
  {path:'test', component:TesterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
