import { CanDeactivateComponent } from './../../shared/deactivation/can-deactivate.guard';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, CanDeactivateComponent {
  
  id: string;
  showDetails: string;
  showWarning = false;
  sender: Observer<boolean>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  canDeactivate(): Observable<boolean> {
    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
      this.showWarning = true;
    });
  }

  public delete(): void {
    console.log('delete...');
  }
}
