import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

    index:number = 0;

    reservations:Reservation[] = [];


    getReservations (): Reservation[] {
      return this.reservations;
    }

    getReservation(id:string): Reservation | undefined {
      return this.reservations.find(res => res.id == id);
    }

    

    addReservation(reservation: Reservation): void {
      reservation.id = this.index.toString();
      this.reservations.push(reservation);
      this.index++;
    }
    

  
    deleteReservation(id: string): void {

      this.reservations = this.reservations.filter(res => res.id !== id);
      
      
    }
    

}
