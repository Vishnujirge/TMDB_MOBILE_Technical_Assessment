import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../models/mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   @Input()mobile !:Imobile

}
