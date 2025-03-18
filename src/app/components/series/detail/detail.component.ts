import { Component } from '@angular/core';
import { SeriesService } from '../../../services/series.service';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SerieDetail } from '../../../interfaces/serie-detail';
import { MovieOriginalLanguagePipe } from '../../../pipes/movie-original-language.pipe';
import { TmdbService } from '../../../services/tmdb.service';

@Component({
  selector: 'app-detail',
  imports: [CommonModule, RouterModule, MovieOriginalLanguagePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailSerieComponent {

  serie?: SerieDetail;

  constructor(private seriesService: SeriesService, public service: TmdbService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    // Obtenemos el id de la url
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');

    this.seriesService.getTvSerieDetail(id).subscribe({
      next: (serie) => {
        this.serie = serie;
        this.serie.generosUnidos = this.serie.genres.map(g => g.name).join(', ');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
