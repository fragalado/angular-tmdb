import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { PopularComponent } from './components/movies/popular/popular.component';
import { TopRatedComponent } from './components/movies/top-rated/top-rated.component';
import { NowPlayingComponent } from './components/movies/now-playing/now-playing.component';
import { UpcomingComponent } from './components/movies/upcoming/upcoming.component';
import { DetailComponent } from './components/movies/detail/detail.component';
import { TopRatedSeriesComponent } from './components/series/top-rated/top-rated.component';
import { PopularSeriesComponent } from './components/series/popular/popular.component';
import { AiringTodayComponent } from './components/series/airing-today/airing-today.component';
import { OntheAirComponent } from './components/series/onthe-air/onthe-air.component';
import { DetailSerieComponent } from './components/series/detail/detail.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent, title: 'Principal' },
  {
    path: 'movies',
    children: [
      { path: 'popular', component: PopularComponent, title: 'Popular Movies' },
      {
        path: 'top-rated',
        component: TopRatedComponent,
        title: 'Top Rated Movies',
      },
      {
        path: 'now-playing',
        component: NowPlayingComponent,
        title: 'Now Playing Movies',
      },
      {
        path: 'upcoming',
        component: UpcomingComponent,
        title: 'Upcoming Movies',
      },
      { path: 'detail/:id', component: DetailComponent, title: 'Movie Detail' },
    ],
  },
  {
    path: 'series',
    children: [
      { path: 'popular', component: PopularSeriesComponent, title: 'Popular Series' },
      {
        path: 'top-rated',
        component: TopRatedSeriesComponent,
        title: 'Top Rated Series',
      },
      {
        path: 'airing-today',
        component: AiringTodayComponent,
        title: 'Airing Today Series',
      },
      {
        path: 'on-the-air',
        component: OntheAirComponent,
        title: 'On The Air Series',
      },
      { path: 'detail/:id', component: DetailSerieComponent, title: 'Serie Detail' },
    ],
  },
  
];
