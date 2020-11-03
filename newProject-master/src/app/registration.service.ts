import {​​ Injectable }​​ from '@angular/core';

import {​​ Observable }​​ from 'rxjs';

import {​​ User }​​ from './user';

import{​​HttpClient}​​ from '@angular/common/http'





@Injectable({​​

  providedIn: 'root'

}​​)

export class RegistrationService {
    registerUser(user: User) {
    return  this._http.post("http://localhost:8080/myapp/register",user)
  }​​

constructor(private _http :HttpClient){​​

}​​



  public loginUser(user:User):Observable<any>{​​

  return  this._http.post("http://localhost:8080/myapp/login",user)




  }​​

}​​