import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  // -1 - typer les données que je vais récupérer
  // ----Tableau results : objet (pokemon: name string; url: string)
  // 0 - Créer le service
  // 1 - Récupérer le base_url et le stocker dans une propriété de mon service
  // 2 - Injection du HttpClient : pour ca ajouter HttpclientModule dans app module ts
  // 3 - Méthode pour récup un poké par id > id est dynamique - paramètre de fonction
  // 4 - Créer le composant qui affiche les infos du poké : pokemon - card
  // 5 - injection du service dans le composant
  // 6 - appeler la méthode du service dans le composant ET PYPE ASYNC

  BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokeById$(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/${id}`);
  }
}
