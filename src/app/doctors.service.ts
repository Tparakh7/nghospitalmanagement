import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private baseUrl = 'http://localhost:8080/api/v1/doctors';

  constructor(private http:HttpClient) { }

  getDoctorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // createDoctors(doctors: object): Observable<object> {
  //   return this.http.post(`${this.baseUrl}`+'save-doctors', doctors);
  // }

  // deleteDoctors(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/delete-doctors/${id}`, { responseType: 'text' });
  // }

  // getDoctors(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/doctors/${id}`);
  // }

  // updateDoctors(id: number, value: any): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}/update-doctors/${id}`, value);
  // }

  // createAppointment(id: number, value: any): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}/update-doctors/${id}`, value);
  // }
}
