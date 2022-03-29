import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  url = null;
  urlArray = new Array();

  constructor() { }

  selectFile(event: any) {
    for (let index = 0; index < event.target.files.length; index++) {
      if (event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[index]);
        reader.onload = (event: any) => {
          this.url = event.target.result;
          this.urlArray.push(this.url);
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
