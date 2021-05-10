import { AppointmentModel } from './appointments/AppointmentModel';
import { Injectable} from '@angular/core';
import { observable, Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:8080/api/v1/appointment';

  constructor(private http:HttpClient) { }


  createAppointment(appointment: AppointmentModel): Observable<object> {
    return this.http.post<AppointmentModel>(this.baseUrl,appointment).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error.statusText);
    if(error.status==406){
       return throwError('Appointment Slot Already Full');
      //  return throwError(error || 'Error Found');
    }
    else {
     return throwError(error || 'Error Found');
    }


    // console.log(httpStatus[406]);
    // if(httpStatus[406]);
    // return throwError(error.message || 'Error Found');

  }


}
