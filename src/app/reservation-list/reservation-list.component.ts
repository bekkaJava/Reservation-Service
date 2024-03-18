import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {


 get reservations() {
    return this.reservationService.getReservations();
  }
  

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {

  }


  deleteReservation(id:string) {
    
    this.reservationService.deleteReservation(id);
  }

}
