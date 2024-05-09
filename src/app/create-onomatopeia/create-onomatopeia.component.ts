import { Component, Output, EventEmitter } from '@angular/core';
import { Onomatopeia } from '../models/Onomatopeia.model';

@Component({
  selector: 'app-create-onomatopeia',
  templateUrl: './create-onomatopeia.component.html',
  styleUrl: './create-onomatopeia.component.css'
})

export class CreateOnomatopeiaComponent {

@Output() newOnomatopeia: EventEmitter<string> = new EventEmitter<string>();

createOnomatopeia(name: string) {
   this.newOnomatopeia.emit(name)
   console.log(name)
}

}
