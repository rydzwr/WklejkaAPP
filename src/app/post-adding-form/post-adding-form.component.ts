import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-adding-form',
  templateUrl: './post-adding-form.component.html',
  styleUrls: ['./post-adding-form.component.css'],
})
export class PostAddingFormComponent implements OnInit {

  url = undefined;
  urlArray = new Array();
  fullArray = false;

  constructor() {}

  selectFile(event: any) {
    if (event.target.files) {
      for (let index = 0; index < event.target.files.length; index++) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[index]);
        reader.onload = (event: any) => {
          this.url = event.target.result;
          if (this.urlArray.length > 1) {
            this.urlArray[1] = this.url;
          } else {
            this.urlArray.push(this.url);
          }
        };
      }
    }
  }

  ngOnInit(): void {}

}
