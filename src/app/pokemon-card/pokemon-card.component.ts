import { Component, OnInit, inject } from '@angular/core';
import { PokeapiService } from '../shared/pokeapi.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent implements OnInit {
  constructor(private pokeService: PokeapiService) {}

  pokemon$!: Observable<any>;

  ngOnInit(): void {
    this.pokemon$ = this.pokeService.getPokeById$(1);
  }
}
