import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Serie } from '../../../interfaces/serie';
import { SeriesService } from '../../../services/series.service';

@Component({
  selector: 'app-top-rated-series',
  imports: [CommonModule, RouterModule],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css'
})
export class TopRatedSeriesComponent {

  series: Serie[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getTvSeriesTopRated().subscribe({
      next: (series: Serie[]) => {
        this.series = series;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  getVoteColor(vote: number): string {
    if (vote < 3) return 'red';
    if (vote < 6) return 'orange';
    if (vote > 8) return 'yellow';
    return 'green';
  }
}
