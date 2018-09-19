/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectedFlightsService } from './selected-flights.service';

describe('Service: SelectedFlights', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedFlightsService]
    });
  });

  it('should ...', inject([SelectedFlightsService], (service: SelectedFlightsService) => {
    expect(service).toBeTruthy();
  }));
});
