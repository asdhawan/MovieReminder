import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
/** moviedetails component*/
export class MovieDetailsComponent implements OnInit {
  @Input() movie: movie;

  /** moviedetails ctor */
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getMovieDetails();
  }

  private getMovieDetails(): void {
    var id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieDetail(id).then((movie: movie) => {
      this.movie = movie;
    });
  }
}
