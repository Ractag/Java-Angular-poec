import { Component, Input, EventEmitter } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-createcat',
  templateUrl: './createcat.component.html',
  styleUrl: './createcat.component.css',
})
export class CreatecatComponent {
  newCat: Cat = new Cat('', '');

  @Input()
  catList: Array<Cat> = [];

  createCat(): void {
    this.catList.push(this.newCat);
    console.log(this.catList);
  }
}
