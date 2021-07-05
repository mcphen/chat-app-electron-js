import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.services'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';
  user = localStorage.user;

  constructor(public authService: AuthService){

  }

  logout(){
    this.authService.SignOut();
  }
}
