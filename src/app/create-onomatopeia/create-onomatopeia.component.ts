import { Component, Output, EventEmitter } from '@angular/core';
import { Onomatopeia } from '../models/Onomatopeia.model';

@Component({
  selector: 'app-create-onomatopeia',
  templateUrl: './create-onomatopeia.component.html',
  styleUrl: './create-onomatopeia.component.css'
})

export class CreateOnomatopeiaComponent {

@Output() newOnomatopeia: EventEmitter<Onomatopeia> = new EventEmitter<Onomatopeia>();

createOnomatopeia() {
   this.newOnomatopeia.emit(this.newOnomatopeia)
}

}
