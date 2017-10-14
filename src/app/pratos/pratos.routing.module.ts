import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratosComponent } from './pratos.component';

const pratosRoutes: Routes = [
    {path: 'pratos', component: PratosComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(pratosRoutes) ],
    exports: [ RouterModule ]
})
export class PratosRoutingModule {}