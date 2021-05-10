import { DoctorsComponent } from './../doctors/doctors.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule, Router} from '@angular/router';
import { AppointmentsComponent } from '../appointments/appointments.component';

const routes : Routes = [
  {path: '', component:DoctorsComponent},
{path: '#', component:DoctorsComponent},
{path: 'doctors', component:DoctorsComponent},
{path: 'doctors/appointments', component: AppointmentsComponent}

]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [ HomeComponent, DoctorsComponent, AppointmentsComponent]
