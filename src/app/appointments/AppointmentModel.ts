import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { NgbTime } from "@ng-bootstrap/ng-bootstrap/timepicker/ngb-time";



export class AppointmentModel{
  DoctorId:number;
  PatientName:string;
  PatientAddress:string;
  ContactNumber:number;
  AppointTime:string;
  AppointDate:NgbDate;
  ParsedAppointDate:string;
  testProp:string;
  ParsedAppointTime:string;
}
