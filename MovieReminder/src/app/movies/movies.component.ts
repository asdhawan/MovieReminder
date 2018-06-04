import { Component, OnInit } from '@angular/core';
import { movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
/** movies component*/
export class MoviesComponent implements OnInit {
  movies: movie[];
  selectedMovie: movie;

  /** movies ctor */
  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.loadMovies();
  }

  onselect(movie: movie): void {
    this.selectedMovie = movie;
  }

  loadMovies(): void {
    this.movieService.getMoviesNowPlaying().then((movies: movie[]) => {
      this.movies = movies;
    });
  }
}
