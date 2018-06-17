import {AppComponent} from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './navbar/login/login.component';
import { RegisterComponent } from './navbar/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './navbar/home/home.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { UsersComponent } from './navbar/users/users.component';
import { UserEditComponent } from './navbar/users/user-edit/user-edit.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ClassesComponent } from './navbar/classes/classes.component';
import { ClassAddComponent } from './navbar/classes/class-add/class-add.component';
import { ClassEditComponent } from './navbar/classes/class-edit/class-edit.component';
import { EventListComponent } from './navbar/events/event-list/event-list.component';
import { EventAddComponent } from './navbar/events/event-add/event-add.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'members',
    component: UsersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'member/:key',
    component: UserEditComponent
  },
  {
    path: 'classes',
    component: ClassesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'classes/add',
    component: ClassAddComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'events/add',
    component: EventAddComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'events/list',
    component: EventListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'classes/:id',
    component: ClassEditComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
