import { Component } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../shared/kitten.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  constructor(private kittenS: KittenService) {}

  kittenList: Array<Kitten> = [];

  catchNewKitten(event: Kitten): void {
    this.kittenList.push(event);
    console.log(this.kittenList);
  }
  spliceNewKitten(event: Kitten, index: number) {
    this.kittenList.splice(index, 1);
    console.log(this.kittenList);
  }
}
