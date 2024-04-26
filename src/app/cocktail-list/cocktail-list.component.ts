import { Component, OnInit, inject } from '@angular/core';
import { CocktailService } from '../shared/cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent implements OnInit {
  cocktails = inject(CocktailService);

  ngOnInit(): any {
    console.log(this.cocktails.getCocktails());
  }
}
