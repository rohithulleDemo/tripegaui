import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DestinationMainpageComponent } from './pages/destination/destination-mainpage/destination-mainpage.component';
import { CityPageComponent } from './pages/destination/destination-subnav/city-page/city-page.component';
import { StatePageComponent } from './pages/destination/destination-subnav/state-page/state-page.component';
import { LoginComponent } from './pages/general/login/login.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { SignupComponent } from './pages/general/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedCityPageComponent } from './shared-components/shared-city-page/shared-city-page.component';
import { SharedMainNavComponent } from './shared-components/shared-main-nav/shared-main-nav.component';
import { SharedStatePageComponent } from './shared-components/shared-state-page/shared-state-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SharedMainNavComponent,
    SharedStatePageComponent,
    SharedCityPageComponent,
    LoginComponent,
    NotFoundComponent,
    SignupComponent,
    StatePageComponent,
    CityPageComponent,
    HomeComponent,
    DestinationMainpageComponent,
    ContactComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
