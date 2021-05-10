
import { AppointmentService } from './../appointment.service';
import { AppointmentModel } from './AppointmentModel';

import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgForm} from '@angular/forms';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  doctorId: number;
  appointment: AppointmentModel = new AppointmentModel();
  submitted = false;
  public errorMsg;
  data;

constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private toastr: ToastrService,
    private router : Router



  ) {
    this.route.queryParams.subscribe((params) => {
      this.doctorId = params['docId'];
    });


  }

  ngOnInit() {}

  newAppointment(): void {
    this.submitted = false;
    this.appointment = new AppointmentModel();
  }

  saveAppointment() {
    this.appointment.DoctorId = this.doctorId;
    console.log(this.appointment);
    this.appointment.ParsedAppointDate = `${this.appointment.AppointDate.day}-${this.appointment.AppointDate.month}-${this.appointment.AppointDate.year}`;
    this.appointment.ParsedAppointTime = this.appointment.AppointTime;

    this.appointmentService.createAppointment(this.appointment).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('Appointment Booked Successfully !!!');
        this.goHome();

      },
      (error) => {
        this.errorMsg = error;
        console.log(error);

        this.toastr.error(this.errorMsg);
        this.goHome();

      }
    );
 }

  onSubmit() {
    this.submitted = true;
    this.saveAppointment();

  }

  goHome() {
    this.router.navigate(['/doctors']);
  }

  registers(regForm:NgForm){
    if(regForm.valid){
this.data = regForm.value;
    }
  }

}
