import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export interface CanDeactivateComponent {
    canDeactivate(): Observable<boolean>;
  }
  
  @Injectable({ providedIn: 'root' })
  export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
  
    canDeactivate(
      component: CanDeactivateComponent,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): Observable<boolean> {
  
      return component.canDeactivate();
  
    }
  
  }
