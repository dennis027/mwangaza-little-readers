import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ProjectsComponent } from './projects/projects.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule} from '@angular/material/card'; 
import { MatSliderModule } from '@angular/material/slider';
import { TesterComponent } from './tester/tester.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PartnerComponent } from './partner/partner.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerSigninComponent } from './auth/volunteer-signin/volunteer-signin.component';  
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { AnnounceComponent } from './announce/announce.component';
import { NotifyComponent } from './notify/notify.component';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { ProgressSpinnerDialogComponent } from './progress-spinner-dialog/progress-spinner-dialog.component';
import { DonateComponent } from './donate/donate.component';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import {NgxLoaderModule} from '@binssoft/ngx-loader';
import { PartnersComponent } from './partners/partners.component';
import { LilianKabayaComponent } from './lilian-kabaya/lilian-kabaya.component';
import { WangariKabayaComponent } from './wangari-kabaya/wangari-kabaya.component';
import { MissionComponent } from './mission/mission.component';


// Gestures
import {
 
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';

/** Import Alyle UI */
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig
} from '@alyle/ui';

/** Import the component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';


/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

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
    TesterComponent,
    SignUpComponent,
    LoginComponent,
    AdminComponent,
    PartnerComponent,
    VolunteerComponent,
    VolunteerSigninComponent,
    ContactInfoComponent,
    NotFoundComponent,
    PartnerFormComponent,
    VolunteerFormComponent,
    AnnounceComponent,
    NotifyComponent,
    ProgressSpinnerDialogComponent,
    DonateComponent,
    PartnersComponent,
    LilianKabayaComponent,
    WangariKabayaComponent,
    MissionComponent,

  ],           
  imports: [ 
    BrowserAnimationsModule,
    HttpClientModule,  
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
     ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    ToastrModule.forRoot(),
    // MatCarouselModule.forRoot(),
    BrowserAnimationsModule, 
    NgbModule,
    NgImageSliderModule,
    NgxLoaderModule,
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    // ...
    // Gestures
    HammerModule


  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    MatTabsModule,
  
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
 
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    // Theme that will be applied to this module
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig } // Required for <ly-carousel>
  
  ], 
  bootstrap: [AppComponent],   
       

})
export class AppModule { }
