import { Student } from '../student/student';
import { Class } from '../class/class';

export class Timestamp {

	Id: number;
	StudentId: number;
	ClassId: number;
	TimeIn: string;
	TimeOut: string;

//making sure all the non-nullable fields are initialized to something
	constructor() {
		this.Id = 0;
	}
}
