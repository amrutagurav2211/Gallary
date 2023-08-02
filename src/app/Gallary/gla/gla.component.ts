import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { GallarySerService } from 'src/app/gallary-ser.service';

@Component({
  selector: 'app-gla',
  templateUrl: './gla.component.html',
  styleUrls: ['./gla.component.css']
})
export class GlaComponent {
  public dt: any;

  constructor( private ser: GallarySerService,private router: Router){
    this.getImg();
  }

  getImg(){
    this.ser.GetImage().subscribe((res:any)=>
    {
      this.dt=res;
      console.log(res);
    })
  }

  toggleSelect(image: any): void {
    image.selected = !image.selected;


   var nav1= confirm("do you want to Full Screen Image");
    if(nav1==true){
      this.router.navigate(['/fullscreen']);
    }
    
  }
  
  deleteSelected(): void {
      this.dt = this.dt.filter((image:any) => !image.selected);
    
  }  

  // openFullscreenView(photoId: number): void {
  //   this.router.navigate(['/fullscreen', photoId]);
  // }

}
