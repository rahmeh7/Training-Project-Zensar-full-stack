import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {​​​​ HttpClientModule }​​​​ from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MumbaiiComponent } from './mumbaii/mumbaii.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { BookingComponent } from './booking/booking.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';





@NgModule({
  declarations: [
    AppComponent,
   
    UserComponent,
    LoginComponent,
    MumbaiiComponent,
    GalleryComponent,
    UpdateBookingComponent,
    UpdateRestoComponent,
    BookingComponent,
    RegistrationComponent,
    AboutComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    NgbModule,
     FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
