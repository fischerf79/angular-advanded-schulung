import { Component, OnInit } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-api';

@Component({
    selector: 'airport',
    templateUrl: './airport.component.html'
})
export class AirportComponent implements OnInit {

    public airports: string[] = [];

    constructor(private airportService: AirportService) { 
    }

    ngOnInit() {
        this.airportService.findAll().subscribe(airports => {
        this.airports = airports;
        });
    }

}
