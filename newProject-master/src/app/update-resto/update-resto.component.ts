import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Booking } from '../booking/booking';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Booking:Booking=new Booking()
  updateResto=new FormGroup({
    userId: new FormControl(''),
    userName: new FormControl(''),
    userEmail: new FormControl('')
  })
  redirectbooking(){
    console.warn(this.updateResto.value)
    this.resto.modifybooking(this.updateResto.value).subscribe((result)=>{
      console.log(`Customer data Saved: ${JSON.stringify(this.updateResto.value)}`)
    })
  }}
