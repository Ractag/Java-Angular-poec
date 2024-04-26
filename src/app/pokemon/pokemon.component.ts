import { Component } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  constructor(private http: PokemonService) {}
}
