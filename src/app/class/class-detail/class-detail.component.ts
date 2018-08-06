import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { Class } from '../class';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from '../../timestamp/timestamp';
import { TimestampService } from '../../timestamp/timestamp.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

	class: Class = new Class();

  timestamp: Timestamp;

  constructor(private classsvc: ClassService,private route: ActivatedRoute, private router: Router, private timestampsvc: TimestampService) { }

  ngOnInit() {

  	let id = this.route.snapshot.params.id;
  	console.log("id: ", id);
    this.classsvc.Get(id);
    this.classsvc.Class.subscribe(data => this.class = data);
  }

}
