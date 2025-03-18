import { Component } from '@angular/core';
import { SeriesService } from '../../../services/series.service';
import { Serie } from '../../../interfaces/serie';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-onthe-air',
  imports: [CommonModule, RouterModule],
  templateUrl: './onthe-air.component.html',
  styleUrl: './onthe-air.component.css'
})
export class OntheAirComponent {

  series: Serie[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getTvSeriesOnTheAir().subscribe({
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
