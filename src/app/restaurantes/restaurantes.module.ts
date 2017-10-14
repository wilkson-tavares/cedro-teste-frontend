import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RestaurantesRoutingModule } from './restaurantes.routing.module';
import { RestaurantesComponent } from './restaurantes.component';
import { RestaurantesService } from './restaurantes.service';
import { RestauranteComponent } from './restaurante/restaurante.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RestaurantesRoutingModule
  ],
  declarations: [RestaurantesComponent, 
    RestauranteComponent
  ],
  providers: [RestaurantesService]
})
export class RestaurantesModule { }
