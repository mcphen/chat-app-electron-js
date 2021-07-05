import { Component, OnInit } from '@angular/core';


import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import {User} from '../shared/services/user'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  groups: Observable<any> | undefined;



  constructor(private firebase: AngularFireDatabase) {}

  ngOnInit() {
      this.groups = this.firebase.list('groups').valueChanges();
  }


}


