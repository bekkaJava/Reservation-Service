import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrls: ['./reservation-from.component.css']
})
export class ReservationFromComponent implements OnInit {


  reservationForm:FormGroup = new FormGroup({})

  constructor(private formBuilder:FormBuilder,
              private reservationService:ReservationService,
              private router:Router) { }

  onSubmit() {

    if(this.reservationForm.valid) {

      this.reservationService.addReservation(this.reservationForm.value)
      
        this.router.navigate(['/list'])
    }

    
  }


  createForm() {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

}
