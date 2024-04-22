import { Component, Output, EventEmitter } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-createcat',
  templateUrl: './createcat.component.html',
  styleUrl: './createcat.component.css',
})
export class CreatecatComponent {
  newCat: Cat = new Cat('', '');

  @Output()
  emitCat: EventEmitter<Cat> = new EventEmitter<Cat>();

  createCat(): void {
    this.emitCat.emit(this.newCat);
  }
}
