import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './moviedetails/moviedetails.component';

import { AppRoutingModule } from './app-routing.module';

import * as ngxbs from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
