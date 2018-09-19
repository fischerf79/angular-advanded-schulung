import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string;

  constructor() { }
  
  login() {
      this.userName = 'Max';
  }

  logout() {
      this.userName = null;
  }

}
