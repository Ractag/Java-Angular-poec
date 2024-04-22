import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrl: './kitten-card.component.css',
})
export class KittenCardComponent {
  @Input()
  kittenChild!: Kitten;

  @Output()
  emitKitten: EventEmitter<Kitten> = new EventEmitter();
  adopt(): void {
    this.emitKitten.emit(this.kittenChild);
  }
}
