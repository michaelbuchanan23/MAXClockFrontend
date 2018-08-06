import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Timestamp, Observable, BehaviorSubject } from '../../../node_modules/rxjs';
import { JsonResponse } from '../utility/json-response';
import { Student } from '../student/student';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {


  url = "http://localhost:12459/Timestamps/";
  private localStudent: BehaviorSubject<Student> = new BehaviorSubject<Student>(new Student());
  public student = this.localStudent.asObservable();

  constructor(private http: HttpClient) { }

  Toggle(timestamp) {
    this.http.post<JsonResponse>(this.url + 'Toggle/', timestamp).subscribe(data => this.localStudent.next(data.Data));
  }
}
