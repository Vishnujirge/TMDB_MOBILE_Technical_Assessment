import { Component, OnInit } from '@angular/core';
import { movieData } from 'src/app/const/movieData';
import { Imovie } from 'src/app/models/movieT';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movieArr :Array<Imovie> = movieData;

}
