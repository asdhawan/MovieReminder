import { Injectable } from '@angular/core';
import { movie } from '../models/movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  apiKey: string = '098f3b2e36992519c1814874200fc995';
  constructor() {
  }

  getMoviesMostPopular(): Promise<movie[]> {
    return this.getMovieList(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`);
  }

  getMoviesNowPlaying(): Promise<movie[]> {
    //return this.getMovieList(`https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=${this.apiKey}`);
    return this.getMovieList('api/MovieDb');
  }

  search(partialName: string): Promise<movie[]> {
    return this.getMovieList(`api/MovieDb/search?partialName=${partialName}`);
  }
  //getMovieDetail(id: number): Promise<movie> {
  //  var options: RequestInit = {
  //    method: 'GET'
  //  };
  //  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`, options)
  //    .then((response: Response) => response.json())
  //    .then((jsonData: any) => {
  //      return this.newMovieObject(jsonData);
  //    });
  //}
  
  getMovieDetail(id: number): Promise<movie> {
    var options: RequestInit = {
      method: 'GET'
    };
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`, options)
      .then((response: Response) => response.json())
      .then((jsonData: any) => {
        return this.newMovieObject(jsonData);
      });
  }

  private getMovieList(resource: string): Promise<movie[]> {
    var options: RequestInit = {
      method: 'GET'
    };
    return fetch(resource, options)
      .then((response: Response) => response.json())
      .then((jsonData: any) => {
        var movies: movie[] = new Array<movie>();
        jsonData.forEach(json => {
          movies.push(this.newMovieObject(json));
        });
        return movies;
      });
  }

  private newMovieObject(json: any): movie {
    var movieObj: movie = {
      id: json.id,
      name: json.title,
      release_date: json.release_date,
      seen: false,
      synopsis: json.overview,
      backdrop_url: `https://image.tmdb.org/t/p/w1280${json.backdrop_path}`,
      poster_url: `https://image.tmdb.org/t/p/w500${json.poster_path}`,
      thumbnail_url: `https://image.tmdb.org/t/p/w300${json.poster_path}`
    };
    return movieObj;
  }

  //private newMovieObject(json: any): movie {
  //  var movieObj: movie = {
  //    id: json.Id,
  //    name: json.Title,
  //    release_date: json.ReleaseDate,
  //    seen: false,
  //    synopsis: json.Overview,
  //    backdrop_url: `https://image.tmdb.org/t/p/w1280${json.BackdropPath}`,
  //    poster_url: `https://image.tmdb.org/t/p/w500${json.PosterPath}`
  //  };
  //  return movieObj;
  //}
}
