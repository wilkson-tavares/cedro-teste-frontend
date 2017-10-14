import { RestaurantesModel } from './restaurantes.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantesService {

	private restaurantes: RestaurantesModel[] = [
		{ id: 1, nome: 'Barollo' },
		{ id: 2, nome: 'Minas Tchê' },
		{ id: 3, nome: 'Porto Alegre' }
	];

	getRestaurantes() {
		return this.restaurantes;
	}

	getRestaurante(id: number) {
		for (let i = 0; i < this.restaurantes.length; i++) {
			if (this.restaurantes[i].id == id)
				return this.restaurantes[i];
		}
		return null;
	}

	setRestaurante(param: RestaurantesModel) {
		this.http.get(`//viacep.com.br/ws/38413288/json/`)
			.map(dados => dados.json())
			.subscribe(dados => console.log(dados));

		// if (param.id == undefined || param.id == 0) {
		// 	this.restaurantes.sort(function (a, b) {
		// 		return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
		// 	});

		// 	param.id = this.restaurantes[this.restaurantes.length - 1].id + 1;
		// 	this.restaurantes.push(param);
		// }
		// else {
		// 	this.restaurantes.forEach(
		// 		(item: RestaurantesModel) => {
		// 			if (item.id == param.id) {
		// 				item.nome = param.nome;
		// 			}
		// 		}
		// 	);
		// }
	}

	constructor(private http: Http) { }

}
