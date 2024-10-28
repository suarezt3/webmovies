import { Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { Session } from 'inspector';
import { SeasonsSeriesComponent } from './components/seasons-series/seasons-series.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/peliculas' },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent},
  { path: 'series/:idSerie', component: SeasonsSeriesComponent},
  { path: '**', redirectTo: '/peliculas' },
];
