import { Component } from '@angular/core';
import { MoviePopular } from '../../../interfaces/movie-popular';
import { MoviesService } from '../../../services/movies.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-now-playing',
  imports: [CommonModule, RouterModule],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.css',
})
export class NowPlayingComponent {
  movies: MoviePopular[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getNowPlayingMovies().subscribe({
      next: (data: MoviePopular[]) => {
        this.movies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getVoteColor(vote: number): string {
    if (vote < 3) return 'red';
    if (vote < 6) return 'orange';
    if (vote > 8) return 'yellow';
    return 'green';
  }
}
