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

	restauranteForm: RestaurantesModel;
	inscricao: Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private restauranteService: RestaurantesService
	) { }

	ngOnInit() {
		this.inscricao = this.route.params.subscribe(
			(params: any) => {
				let id = params['id'] || 0;
				this.restauranteForm = Object.assign({}, this.restauranteService.getRestaurante(id));
			}
		);
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}

	onSubmit(form) {
		this.restauranteService.setRestaurante(null);
	}

	onCancel() {
		this.router.navigate(['/restaurantes']);
	}

}
