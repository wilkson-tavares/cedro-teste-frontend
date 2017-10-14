import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantesService } from './restaurantes.service';
import { RestaurantesModel } from './restaurantes.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  filtro: string;
  private restaurantes: RestaurantesModel[] = [];
  
  constructor(
    private restaurantesService: RestaurantesService,
    private router: Router,
  ) { }

  ObterRestaurantes(){
    if (this.restaurantes.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.restaurantes;
    }

    return this.restaurantes.filter((v) => {
      if (v.nome.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }

  cadastrarRestaurante(){
    this.router.navigate(['/restaurantes', '0']);
  }


  ngOnInit() {
    this.restaurantes = this.restaurantesService.getRestaurantes();
  }

}
