import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import{RestoService} from '../resto.service'
import { Booking } from './booking';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Booking:Booking=new Booking()
  addResto=new FormGroup({
    userId: new FormControl(''),
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    userPhone: new FormControl(''),
    person: new FormControl('')
   // Checkindate: new FormControl(''),
    //Checkoutdate : new FormControl('')
  })
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  bookResto(){
   console.warn(this.addResto.value)
    this.resto.addUser(this.addResto.value).subscribe((result)=>{
      //this.addResto.reset({})
      console.log(`Customer data Saved: ${JSON.stringify(this.addResto.value)}`)
      

    })
   
   
  }
 

}