import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ProjectsComponent } from './projects/projects.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule} from '@angular/material/card'; 
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    WhoWeAreComponent,
    ProjectsComponent,
    JoinUsComponent,
    ContactUsComponent,
    FooterComponent,

  ], 
  imports: [ 
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatSidenavModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    // MatCarouselModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ],
 
  providers: [], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
