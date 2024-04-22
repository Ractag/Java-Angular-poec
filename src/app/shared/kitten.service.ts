import { Injectable } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Injectable({
  providedIn: 'root',
})
export class KittenService {
  adoptedKittens: Array<Kitten> = [];

  constructor() {}
}
