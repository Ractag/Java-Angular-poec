import { Injectable } from '@angular/core';
import { Mug } from '../models/mug.model';

@Injectable({
  providedIn: 'root',
})
export class MugservicesService {
  private mugList: Array<Mug> = [];

  constructor() {}

  addMug() {}

  getMugList() {
    return this.mugList;
  }
}
