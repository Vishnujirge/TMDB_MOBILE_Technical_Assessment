import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/postT';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input()post !:Ipost

}
