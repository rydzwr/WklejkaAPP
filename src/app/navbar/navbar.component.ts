import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activePage: string = "";

  constructor(router: ActivatedRoute) {
    router.url.pipe(map(segments => segments[0].path)).subscribe((path) => {this.activePage = path});
  }

  ngOnInit(): void {


  }

}
