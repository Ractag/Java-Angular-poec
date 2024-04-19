import { Component, Output, EventEmitter } from '@angular/core';
import { Onomatopeia } from '../models/onomatopeia.model';
import { OnomatopeiaListComponent } from '../onomatopeia-list/onomatopeia-list.component';

@Component({
  selector: 'app-create-onomatopeia',
  templateUrl: './create-onomatopeia.component.html',
  styleUrl: './create-onomatopeia.component.css',
})
export class CreateOnomatopeiaComponent {
  catchOnomatopeia!: Onomatopeia;

  @Output()
  onomatopeia: EventEmitter<Onomatopeia> = new EventEmitter();

  createOnomatopeia(): void {
    this.onomatopeia.emit(this.catchOnomatopeia);
  }
}
