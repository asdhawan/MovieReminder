import { Component, OnInit } from '@angular/core';
import { movie } from '../models/movie';
import { MovieService } from '../services/movie.service'
import {  } from 'moviedb'

@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css']
})
/** moviesearch component*/
export class MovieSearchComponent implements OnInit {
  searchObj: movie;
  searchResults: movie[];

  /** moviesearch ctor */
  constructor(private movieSvc: MovieService) {
    this.searchObj = new movie();
    this.searchObj.id = -1;
  }

  ngOnInit() { }

  handleSearch(): void {
    this.movieSvc.search(this.searchObj.name)
      .then((results: movie[]) => {
        this.searchResults = results;
        //this.searchResults.push(m);
      });
  }
}
