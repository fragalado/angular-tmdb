import { Component } from '@angular/core';
import { MovieDetails } from '../../../interfaces/movie-details';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MovieOriginalLanguagePipe } from '../../../pipes/movie-original-language.pipe';
import { TmdbService } from '../../../services/tmdb.service';

@Component({
  selector: 'app-detail',
  imports: [CommonModule, MovieOriginalLanguagePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  movie: MovieDetails | undefined;

  constructor(
    private movieService: MoviesService,
    public service: TmdbService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    // Obtenemos el id de la url
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');

    if (id) {
      this.movieService.getMovieDetail(id).subscribe({
        next: (data: MovieDetails) => {
          this.movie = data;
          this.movie.generosUnidos = this.movie.genres.map(g => g.name).join(', ');
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      // Redirigimos a principal
      this.router.navigateByUrl('/');
    }
  }

  goBack() {
    this.location.back();
  }
}
