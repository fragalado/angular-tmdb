import { Component } from '@angular/core';
import { SeriesService } from '../../../services/series.service';
import { Serie } from '../../../interfaces/serie';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-series',
  imports: [RouterModule, CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularSeriesComponent {

  series: Serie[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getTvSeriesPopular().subscribe({
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
