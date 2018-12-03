import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotosService {

    constructor(private httpClient:HttpClient){

    }

    getPhotos():Observable<any>{

        //http vs httpclient (angular 4.3 >)
        //by default json data
        //can make use of interceptors / middleware
        //can handle progress events of request upload and response download
        return this.httpClient.get('https://jsonplaceholder.typicode.com/album/1/photos')
    }

    addPhoto(){
        return this.httpClient.post("https://jsonplaceholder.typicode.com/photos",{
            "albumId": 1,
            "title": "New Photo",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        })
    }
}