import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './moviedetails/moviedetails.component';
import { MovieSearchComponent } from './moviesearch/moviesearch.component';

import { AppRoutingModule } from './app-routing.module';

import * as ngxbs from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieSearchComponent
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
