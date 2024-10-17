import { Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/peliculas' },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent},
  { path: '**', redirectTo: '/peliculas' },
];
