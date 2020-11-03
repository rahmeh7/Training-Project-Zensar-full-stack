import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { logging } from 'protractor';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';

import { LoginComponent } from './login/login.component';
import { MumbaiiComponent } from './mumbaii/mumbaii.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';


import { UserComponent } from './user/user.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'user', component: UserComponent}, 
  { path: 'mumbaii', component: MumbaiiComponent},
  { path: 'gallery', component: GalleryComponent},
  {component:UpdateRestoComponent, path:'update'},
  {component:UpdateBookingComponent, path:'updatebooking'},
  {component:BookingComponent,path:'booking' },
  {component:LoginComponent,path:'login'},
  {component:RegistrationComponent,path:'register'},
  {component:AboutComponent,path:'about'}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
