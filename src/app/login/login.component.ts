import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.services'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error='';
  constructor(public authService: AuthService){

  }

  login(username: string, password : string){
     //perform login here

     this.authService.login(username, password);
  }

  ngOnInit(): void {
  }

}


