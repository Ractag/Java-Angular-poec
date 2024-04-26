import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktails: Array<Cocktail> = [
    {
      name: 'Bloody-Mary',
      price: 30,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bloody_Mary_Coctail_with_celery_stalk_-_Evan_Swigart.jpg/599px-Bloody_Mary_Coctail_with_celery_stalk_-_Evan_Swigart.jpg',
    },
    {
      name: 'Beer',
      price: 25,
      image: 'https://storage.googleapis.com/pod_public/1300/163656.jpg',
    },
    {
      name: 'Sangria',
      price: 10,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwExsxRjoJ0lrPAuEXnCEN1ENqkewGvZaitosJBK3C_w&s',
    },
  ];

  getCocktails(): Array<Cocktail> {
    return this.cocktails;
  }
}
