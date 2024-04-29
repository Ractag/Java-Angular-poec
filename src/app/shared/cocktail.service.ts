import { Injectable, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private http = inject(HttpClient);

  getCocktails(): Observable<Array<Cocktail>> {
    return this.http.get<Array<Cocktail>>('../assets/cocktails.json');
  }
}
