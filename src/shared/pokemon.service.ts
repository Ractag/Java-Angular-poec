import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokeUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemons(numberOfPokemons: number): Observable<any> {
    return this.http.get(`${this.pokeUrl}/list/${numberOfPokemons}`);
  }
}
