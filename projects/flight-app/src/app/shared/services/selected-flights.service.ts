import { Flight } from './../../../../../flight-api/src/lib/models/flight';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedFlightsService {

  private basket: Array<Flight> = new Array<Flight>();

  constructor() { }

  public addFlight(flight: Flight): void {
    if (!this.basket.find((f: Flight) => { return f.id === flight.id })) {
      this.basket.push(flight);
      console.log('Add new flight...');
    } else {
      console.log('Flight already exists...');
    }
  }
}
