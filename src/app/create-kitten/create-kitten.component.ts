import { Component, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css',
})
export class CreateKittenComponent {
  kitten: Kitten = new Kitten('', '', '', '');

  @Output()
  emitKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  onSubmit() {
    this.emitKitten.emit(this.kitten);
  }
}
