import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from 'src/app/models/movieT';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()movie !:Imovie
}
