import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details';
import { MoviePopular } from '../interfaces/movie-popular';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) { }

  // Método que devuelve un array de peliculas populares ordenadas por popularidad
  getPopularMovies() {
    return this.http
      .get(`${this.baseUrl}/popular`)
      .pipe(map((data: any) => data.results));
  }

  // Método que devuelve un array de peliculas top rated
  getTopRatedMovies() {
    return this.http
      .get(`${this.baseUrl}/top_rated`)
      .pipe(map((data: any) => data.results));
  }

  // Metodo que devuelve un array de peliculas now playing
  getNowPlayingMovies() {
    return this.http
      .get(`${this.baseUrl}/now_playing`)
      .pipe(map((data: any) => data.results));
  }

  // Metodo que devuelve un array de peliculas upcoming
  getUpcomingMovies() {
    return this.http
      .get<MoviePopular[]>(`${this.baseUrl}/upcoming`)
      .pipe(map((data: any) => data.results));
  }

  // Metodo que devuelve todos los detalles de una pelicula por su id
  getMovieDetail(id: number): Observable<MovieDetails> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<MovieDetails>;
  }

  // Metodo que devuelve las trending movies
  getTrendingMovies() {
    return this.http.get<MoviePopular[]>('https://api.themoviedb.org/3/trending/movie/week').pipe(map((data: any) => data.results));
  }
}
