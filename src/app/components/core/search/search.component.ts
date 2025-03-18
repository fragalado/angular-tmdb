import { Component } from '@angular/core';
import { MoviePopular } from '../../../interfaces/movie-popular';
import { Serie } from '../../../interfaces/serie';
import { MoviesService } from '../../../services/movies.service';
import { SeriesService } from '../../../services/series.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe, SlicePipe } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, RouterModule, SlicePipe, DatePipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchControl = new FormControl('');
  dataMovie: MoviePopular[] = [];
  dataSerie: Serie[] = [];

  constructor(private movieService: MoviesService, private serieService: SeriesService) { }

  ngOnInit() {
    // Obtenemos el nombre de la pelicula/serie que se quiere buscar si lo hay
    const nameSearch = sessionStorage.getItem('nameSearch');
    if (nameSearch) {
      this.searchControl.setValue(nameSearch);

      // Buscamos en la base de datos si la pelicula/serie existe
      this.searchMovie(nameSearch);
      this.searchTvShow(nameSearch);
    }

    // Detectar cambios en el input y hacer la búsqueda automáticamente
    this.searchControl.valueChanges
      .pipe(
        debounceTime(700),  // Espera 500ms después de que el usuario deja de escribir
        distinctUntilChanged()  // Evita búsquedas repetidas con el mismo valor
      )
      .subscribe((name) => {
        if (name!.trim().length > 2) {  // Solo buscar si hay al menos 3 caracteres
          sessionStorage.setItem('nameSearch', name!);
          this.searchMovie(name!);
          this.searchTvShow(name!);
        } else {
          this.dataMovie = [];
          this.dataSerie = [];
        }
      });
  }

  searchMovie(query: string) {
    this.movieService.searchMovie(query).subscribe({
      next: (data) => {
        this.dataMovie = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  searchTvShow(query: string) {
    this.serieService.searchTvShow(query).subscribe({
      next: (data) => {
        this.dataSerie = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
