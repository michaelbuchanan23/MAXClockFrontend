import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from './class';
import {JsonResponse} from '../utility/json-response';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

url = "http://localhost:12459/Classes/";

	List(): Observable<JsonResponse> {
		return this.http.get(this.url+"List") as Observable<JsonResponse>;
	}

	Active(): Observable<JsonResponse> {
		return this.http.get(this.url+"Active") as Observable<JsonResponse>;
	}

	// get(id: number) : Observable<JsonResponse> {
	// 	return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
	// }

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