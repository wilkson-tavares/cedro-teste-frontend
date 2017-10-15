import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { RestaurantesService } from './../restaurantes.service';
import { RestaurantesModel } from './../restaurantes.model';

@Component({
	selector: 'app-restaurante',
	templateUrl: './restaurante.component.html',
	styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit, OnDestroy {

	restauranteForm: RestaurantesModel = new RestaurantesModel();
	inscricao: Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private restauranteService: RestaurantesService
	) { }

	ngOnInit() {
		this.inscricao = this.route.params.subscribe(
			(params: any) => {
				let id: number = params['id'] || 0;
				if (id != 0){
					this.restauranteService.getRestaurante(id).subscribe((restaurante: RestaurantesModel) =>{
						this.restauranteForm = restaurante[0];
					});
				}
			}
		);
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}

	onSubmit(form) {
		let ob: Observable<RestaurantesModel>;
		let restaurante: RestaurantesModel = {id: form.value.id, nome: form.value.nome};
		ob = this.restauranteService.setRestaurante(restaurante);
	}

	onCancel() {
		this.router.navigate(['/restaurantes']);
	}

}
