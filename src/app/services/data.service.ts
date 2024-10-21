import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  private url = environment.supabaseurl;

constructor() { }


/**
 *
 * @returns Metodo que devuelve una lista de peliculas
 */
getMovies() {
  let headers = new HttpHeaders({
    'apikey': environment.supabaseKey,
    'Authorization': environment.authorization
  })
  return this.http.get(`${this.url}/peliculas`, {headers}).pipe()

}


}
