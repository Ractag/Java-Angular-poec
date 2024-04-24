import { Component, OnInit } from '@angular/core';
import { Mug } from '../models/mug.model';
import { MugservicesService } from '../shared/mugservices.service';

@Component({
  selector: 'app-muglist',
  templateUrl: './muglist.component.html',
  styleUrl: './muglist.component.css',
})
export class MuglistComponent implements OnInit {
  mugList: Array<Mug> = [];

  constructor(private MugS: MugservicesService) {}

  ngOnInit(): void {
    this.mugList = this.MugS.getMugList();
    console.log(this.mugList);
  }
}
