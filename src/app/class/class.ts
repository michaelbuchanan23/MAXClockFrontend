import { Student } from '../student/student';
import { Instructor } from '../instructor/instructor';

export class Class {

	Id: number;
	Title: string;
	Description :string;
	Instructor: Instructor;
	Students: Student[];

}
