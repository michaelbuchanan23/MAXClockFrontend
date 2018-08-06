import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Class } from './class';
import {JsonResponse} from '../utility/json-response';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

	url = "http://localhost:12459/Classes/";
	
	private localClass: BehaviorSubject<Class> = new BehaviorSubject<Class>(new Class());
	public Class = this.localClass.asObservable();

	List(): Observable<JsonResponse> {
		return this.http.get(this.url+"List") as Observable<JsonResponse>;
	}

	Active(): Observable<JsonResponse> {
		return this.http.get(this.url+"Active") as Observable<JsonResponse>;
	}

 	Get(id: number) {
	 	this.http.get<JsonResponse>(this.url+"Get/"+id).subscribe(data => this.localClass.next(data.Data));
	 }

	// create(class: Class): Observable<JsonResponse> {
	// 	return this.http.post(this.url+"Create",class) as Observable<JsonResponse>;
	// }

	// change(class: Class): Observable<JsonResponse> {
	// 	return this.http.post(this.url+"Change",class) as Observable<JsonResponse>;
	// }

	// remove(class: Class): Observable<JsonResponse> {
	// 	return this.http.post(this.url+"Remove",class) as Observable<JsonResponse>;
	// }

  constructor(private http: HttpClient) { }
}