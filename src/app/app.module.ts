import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { RestaurantesModule } from './restaurantes/restaurantes.module';
import { PratosModule } from './pratos/pratos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    RestaurantesModule,
    PratosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
