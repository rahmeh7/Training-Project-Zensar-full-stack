import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  user = new User();
  msg='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {}
  
  registerUser(){
    this._service.registerUser(this.user).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/login'])
      },
      error => {
        console.log("Exception Occured");
        this.msg=error.error;
      }
    )
  }
  getUrl() {
    return "url('https://www.pxl.be/Assets/website/pxl_algemeen/afbeeldingen/pxl_beeld_geselecteerd.jpg')";
  }


}

