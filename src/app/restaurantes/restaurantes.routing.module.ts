import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantesComponent } from './restaurantes.component';
import { RestauranteComponent } from './restaurante/restaurante.component';

const restaurantesRoutes: Routes = [
    {path: 'restaurantes', component: RestaurantesComponent, children: [
        {path: 'novo', component: RestauranteComponent},
        {path: ':id', component: RestauranteComponent}
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(restaurantesRoutes) ],
    exports: [ RouterModule ]
})
export class RestaurantesRoutingModule {}