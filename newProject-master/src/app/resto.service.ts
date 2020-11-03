import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  //url="http://localhost:3000/restaurants";
  url = "http://localhost:8080/myapp/api/user";
  constructor(private http: HttpClient) { }
  
  getAllUsers() {
    return this.http.get(this.url);
  }
  
  saveResto(data) {
    return this.http.post(this.url, data)
  }
  
  deleteResto(id) {
    return this.http.delete(`${this.url}/${id}`)
  }
  
  addUser(data) {
    console.log('Inside book hotel method...');
    
    return this.http.post(this.url, data)
  }
  modifybooking(data){
    return this.http.patch(this.url,data)

  }
}
