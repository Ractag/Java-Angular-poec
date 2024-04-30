import { Component, inject } from '@angular/core';
import { CocktailService } from '../shared/cocktail.service';
import { Cocktail } from '../models/cocktail.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent {
  cocktails$: Observable<Cocktail[]> = inject(CocktailService).getCocktails$();
}
