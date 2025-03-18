import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, shareReplay, tap } from 'rxjs';
import { Languages } from '../interfaces/languages';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {

  private languages$!: Observable<Languages[]>;

  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  // Método que devuelve todos los lenguajes con caché
  getLanguages(): Observable<Languages[]> {
    if (!this.languages$) {
      console.log("No hay datos");

      this.languages$ = this.http.get<Languages[]>(`${this.baseUrl}/configuration/languages`).pipe(
        shareReplay(1) // Almacena el resultado para evitar múltiples peticiones
      );
    }
    return this.languages$;
  }
}
