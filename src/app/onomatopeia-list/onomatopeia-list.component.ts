import { Component } from '@angular/core';
import { Onomatopeia } from '../models/onomatopeia.model';

@Component({
  selector: 'app-onomatopeia-list',
  templateUrl: './onomatopeia-list.component.html',
  styleUrl: './onomatopeia-list.component.css',
})
export class OnomatopeiaListComponent {
  onomatopeiaList: Array<Onomatopeia> = [];

  catchOnomatopeia(event: Onomatopeia): void {
    this.onomatopeiaList.push(event);
    console.log(this.onomatopeiaList);
  }
}
