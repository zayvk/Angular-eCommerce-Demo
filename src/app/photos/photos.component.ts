import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotosService]
})
export class PhotosComponent implements OnInit {

  photos:any;
  constructor(private photosService:PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(photolist => {
      this.photos = photolist;
    })
  }

  addPhoto():void{
    this.photosService.addPhoto().subscribe(response => 
      console.log(response)
      )
  }

}
