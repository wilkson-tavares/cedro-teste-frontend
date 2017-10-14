import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PratosRoutingModule } from './pratos.routing.module';
import { PratosComponent } from './pratos.component';
import { PratosService } from './pratos.service';

@NgModule({
  imports: [
    CommonModule,
    PratosRoutingModule
  ],
  declarations: [PratosComponent],
  providers: [PratosService]
})
export class PratosModule { }
