import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SerieDetail } from '../interfaces/serie-detail';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private baseUrl = 'https://api.themoviedb.org/3/tv';
  constructor(private http: HttpClient) { }

  // Método que devuelve todas las series de TMDB Airing Today
  getTvSeriesAiringToday() {
    return this.http.get<Serie[]>(`${this.baseUrl}/airing_today`).pipe(map((data: any) => data.results));
  }

  // Método que devuelve todas las series de TMDB On the Air
  getTvSeriesOnTheAir() {
    return this.http.get<Serie[]>(`${this.baseUrl}/on_the_air`).pipe(map((data: any) => data.results));
  }

  // Método que devuelve todas las series de TMDB Popular
  getTvSeriesPopular() {
    return this.http.get<Serie[]>(`${this.baseUrl}/popular`).pipe(map((data: any) => data.results));
  }

  // Método que devuelve todas las series de TMDB Top Rated
  getTvSeriesTopRated() {
    return this.http.get<Serie[]>(`${this.baseUrl}/top_rated`).pipe(map((data: any) => data.results));
  }

  // Método que devuelve la serie de TMDB con el id pasado
  getTvSerieDetail(id: number): Observable<SerieDetail> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<SerieDetail>;
  }

  // Metodo que devuelve las series de TMDB Trending
  getTrendingTvShows() {
    return this.http.get<Serie[]>('https://api.themoviedb.org/3/trending/tv/week').pipe(map((data: any) => data.results));
  }


  // Metodo que devuelve las series de TMDB con el nombre de la serie
  searchTvShow(query: string) {
    return this.http.get<Serie[]>(`https://api.themoviedb.org/3/search/tv?query=${query}`).pipe(map((data: any) => data.results));
  }
}
