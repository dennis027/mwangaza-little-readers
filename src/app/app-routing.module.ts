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
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PartnerComponent } from './partner/partner.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerSigninComponent } from './auth/volunteer-signin/volunteer-signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { AnnounceComponent } from './announce/announce.component';
import { NotifyComponent } from './notify/notify.component';
import { DonateComponent } from './donate/donate.component';
import { PartnersComponent } from './partners/partners.component';
import { LilianKabayaComponent } from './lilian-kabaya/lilian-kabaya.component';
import { WangariKabayaComponent } from './wangari-kabaya/wangari-kabaya.component';
import { MissionComponent } from './mission/mission.component';
const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'home',component:LandingComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'whoweare',component:WhoWeAreComponent},
  {path:'joinus',component:JoinUsComponent} ,
  {path:'projects',component:ProjectsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'footer',component:FooterComponent},
  {path:'test', component:TesterComponent},
  {path:'sign-in',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'partner',component:PartnerComponent},
  {path:'volunteer',component:VolunteerComponent},
  {path:'signin',component:VolunteerSigninComponent},
  {path:'partner-form',component:PartnerFormComponent},
  {path:'vform', component:VolunteerFormComponent},
  {path:'announce',component:AnnounceComponent},
  {path:'notify',component:NotifyComponent},
  {path:'donate',component:DonateComponent},
  {path:'partners', component:PartnersComponent},
  {path:'lilian-kabaya',component:LilianKabayaComponent},
  {path:'wangari-kabaya',component:WangariKabayaComponent},
  {path:'mission',component:MissionComponent},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
