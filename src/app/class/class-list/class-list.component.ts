import { Component, OnInit } from '@angular/core';
// import { Student } from '../../student/student';
// import { StudentService } from '../../student/student.service';
import { ClassService } from '../class.service';
import { Class } from '../class';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

activeClasses;


  constructor(private classsvc: ClassService) { }

  ngOnInit() {

    this.classsvc.Active()
    this.classsvc.ActiveClasses.subscribe(data => this.activeClasses = data);
  }

}
