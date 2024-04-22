import { Component, Input } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrl: './catlist.component.css',
})
export class CatlistComponent {
  catList: Array<Cat> = [];

  onCatAdded(event: Cat): void {
    this.catList.push(event);
  }
}
