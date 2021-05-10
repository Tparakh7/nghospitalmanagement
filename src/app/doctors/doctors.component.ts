import { Doctor } from '../doctor';
import { DoctorsService } from './../doctors.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: [
  ]
})
export class DoctorsComponent implements OnInit {

  doctors : Observable<Doctor[]>
  constructor(private doctorservice:DoctorsService, private router : Router) { }



  ngOnInit():void {
  this.reloadData();
  }

  reloadData(){
    this.doctors = this.doctorservice.getDoctorsList();
  }

}
