import { Component } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  kittenList: Array<Kitten> = [];

  catchNewKitten(event: Kitten): void {
    this.kittenList.push(event);
    console.log(this.kittenList);
  }
}
