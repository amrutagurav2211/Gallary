import { Component } from '@angular/core';
import { GallarySerService } from '../gallary-ser.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-screen-view',
  templateUrl: './full-screen-view.component.html',
  styleUrls: ['./full-screen-view.component.css']
})
export class FullScreenViewComponent {

public  selectedPhoto:any;
constructor( private http:HttpClient , private route:ActivatedRoute , private serv:GallarySerService){
  this.getFullScreen();
}

  // fetchSelectedPhoto(photoId: number): void {
  //   this.http.get<any>('https://jsonplaceholder.typicode.com/photos/' + photoId)
  //     .subscribe(photo => {
  //       this.selectedPhoto = photo;
  //     });
  // }

  getFullScreen(){
    this.serv.GetImage().subscribe((res:any)=>{
      this.selectedPhoto=res;
      console.log(res);
    })
  }


}
