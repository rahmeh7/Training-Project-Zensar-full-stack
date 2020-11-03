import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Booking } from '../booking/booking';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  Booking:Booking=new Booking()

  addResto=new FormGroup({
    userId: new FormControl(''),
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    userPhone: new FormControl(''),
    person: new FormControl('')
  })
  modifybooking(){
    console.warn(this.addResto.value)
    this.resto.modifybooking(this.addResto.value).subscribe((result)=>{
      console.log(`Customer data Saved: ${JSON.stringify(this.addResto.value)}`)
    })
  }
}
