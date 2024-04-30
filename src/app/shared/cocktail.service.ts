import { Injectable, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private http = inject(HttpClient);

  getCocktails$(): Observable<Cocktail[]> {
    return this.http
      .get<Cocktail[]>('../assets/cocktails.json')
      .pipe(map((element) => element));
  }
}
