import { Component, Input, inject } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../shared/kitten.service';

@Component({
  selector: 'app-adopted-kitten',
  templateUrl: './adopted-kitten.component.html',
  styleUrl: './adopted-kitten.component.css',
})
export class AdoptedKittenComponent {
  kittenList: Kitten[] = inject(KittenService).adoptedKittens;
}
