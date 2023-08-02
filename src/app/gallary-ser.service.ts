import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GallarySerService {

  constructor(private http: HttpClient) { }

  GetImage(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  DeleteImage(id:any){
    return this.http.delete('https://jsonplaceholder.typicode.com/photos/'+id);
  }


}
