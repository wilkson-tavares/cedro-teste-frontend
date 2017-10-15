import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestaurantesModel } from './restaurantes.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantesService {

	private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' })});
	private restauranteURL = 'http://localhost:50589/api/restaurante/';
	private restaurantes: RestaurantesModel[] = [];
	
	getRestaurantes(){
		return this.http.get(`${this.restauranteURL}get`)
			.map((res: Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	getRestaurante(id: number){
		return this.http.get(`${this.restauranteURL}get/${id}`)
			.map((res: Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	setRestaurante(param: RestaurantesModel): Observable<RestaurantesModel>{
		return this.http.post(`${this.restauranteURL}`, JSON.stringify(param), null)
			.map((res: Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	constructor(private http: Http) { }

}
