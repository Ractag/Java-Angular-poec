import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../shared/kitten.service';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrl: './kitten-card.component.css',
})
export class KittenCardComponent {
  @Input()
  kittenChild!: Kitten;

  @Input()
  kittenId!: number;

  @Input()
  kittenFromParent!: Kitten[];

  // @Output()
  // emitKitten: EventEmitter<Kitten> = new EventEmitter();

  constructor(private kittenS: KittenService) {}

  // adopt(): void {
  //   this.emitKitten.emit(this.kittenChild);
  // }

  adopt(index: number): void {
    this.kittenS.adoptedKittens.push(this.kittenChild);
    this.kittenFromParent.splice(index, 1);
  }
}
