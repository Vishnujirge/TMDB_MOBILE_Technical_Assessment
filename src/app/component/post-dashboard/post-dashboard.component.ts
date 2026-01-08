import { Component, OnInit } from '@angular/core';
import { postData } from 'src/app/const/postData';
import { Ipost } from 'src/app/models/postT';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  postArr :Array<Ipost>=postData
}
