import { Component } from '@angular/core';
import { MoviePopular } from '../../../interfaces/movie-popular';
import { MoviesService } from '../../../services/movies.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-popular',
  imports: [CommonModule, RouterModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css',
})
export class PopularComponent {
  movies: MoviePopular[] = [];

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (data: MoviePopular[]) => {
        this.movies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
