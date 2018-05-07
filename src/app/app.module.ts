import {FormsModule} from '@angular/forms';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MemberService } from './services/member.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { RegisterComponent } from './navbar/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './navbar/home/home.component';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing.module';
import { UsersListComponent } from './navbar/users/users-list/users-list.component';
import { UsersComponent } from './navbar/users/users.component';
import { UserEditComponent } from './navbar/users/user-edit/user-edit.component';
import { AuthGuardService } from './services/auth-guard.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    UsersListComponent,
    UsersComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, MemberService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
