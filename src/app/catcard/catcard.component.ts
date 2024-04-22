import { Component, Input } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrl: './catcard.component.css',
})
export class CatcardComponent {
  @Input()
  catList: Array<Cat> = [];
}
