import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student';
import { Timestamp } from '../timestamp/timestamp';
import { TimestampService } from '../timestamp/timestamp.service';
import { ClassService } from '../class/class.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;
  @Input() classId: number;
  timestamp: Timestamp = new Timestamp();
  
  constructor(private timestampsvc: TimestampService, private classsvc: ClassService) { }

  ngOnInit() {
  }

  Toggle() {
    this.timestamp.StudentId = this.student.Id;
    this.timestamp.ClassId = this.classId;
    this.timestampsvc.Toggle(this.timestamp);
    this.classsvc.Get(this.classId);

  }
}
