import { Component } from '@angular/core';
import { MoviePopular } from '../../interfaces/movie-popular';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../interfaces/serie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [CommonModule, RouterModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {

  loadingTrendingMovies: boolean = true;
  loadingPopularTvShows: boolean = true;
  loadingAiringTodayTvShows: boolean = true;
  loadingUpcomingMovies: boolean = true;

  trendingMovies: MoviePopular[] = [];
  popularTvShows: Serie[] = [];
  airingTodayTvShows: Serie[] = [];
  upcomingMovies: MoviePopular[] = [];

  constructor(private movieService: MoviesService, private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.loadPopularTvShows();
    this.loadTrendingMovies();
    this.loadAiringTodayTvShows();
    this.loadUpcomingMovies();
  }

  loadTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe({
      next: (movies) => {
        this.trendingMovies = movies.slice(0, 6);
        this.loadingTrendingMovies = false;
      },
      error: (err) => {
        console.log(err);
        this.loadingTrendingMovies = false;
      }
    });
  }

  loadPopularTvShows() {
    this.seriesService.getTrendingTvShows().subscribe({
      next: (series) => {
        this.popularTvShows = series.slice(0, 6);
        this.loadingPopularTvShows = false;
      },
      error: (err) => {
        console.log(err);
        this.loadingPopularTvShows = false;
      }
    });
  }

  loadAiringTodayTvShows() {
    this.seriesService.getTvSeriesAiringToday().subscribe({
      next: (series) => {
        this.airingTodayTvShows = series.slice(0, 6);
        this.loadingAiringTodayTvShows = false;
      },
      error: (err) => {
        console.log(err);
        this.loadingAiringTodayTvShows = false;
      }
    });
  }

  loadUpcomingMovies() {
    this.movieService.getUpcomingMovies().subscribe({
      next: (movies) => {
        this.upcomingMovies = movies.slice(0, 10);
        this.loadingUpcomingMovies = false;
      },
      error: (err) => {
        console.log(err);
        this.loadingUpcomingMovies = false;
      }
    });
  }
}
