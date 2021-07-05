import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import {ChatComponent} from './chat/chat.component'
import {MessagesComponent} from './messages/messages.component'

import { AuthGuard } from "./guard/auth.guard";
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'chat',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'chat/:group/messages',
    component: MessagesComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
