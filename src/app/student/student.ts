import { Timestamp } from '../timestamp/timestamp';
import { Class } from '../class/class';

export class Student {

	Id: number;
	Firstname: string;
	Lastname: string;
	Timestamp: Timestamp[];
	Classes: Class[];
	PIN: number;
	CheckedIn: boolean;


//making sure all the non-nullable fields are initialized to something
	constructor() {
		this.Id = 0;
		this.CheckedIn=false;
		
	}
}
