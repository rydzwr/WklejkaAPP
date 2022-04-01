import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-board',
  templateUrl: './posts-board.component.html',
  styleUrls: ['./posts-board.component.css'],
})
export class PostsBoardComponent implements OnInit {

  postsArray = new Array();
  post: any;

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 100; index++) {
      this.postsArray.push(this.post);
    }
  }

}
