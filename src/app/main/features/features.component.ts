import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
/**
 * this is the forfeature array 
 */
  forFeatures:any =[]
  constructor(public main: HeaderService) { }
  
  ngOnInit(): void {
   this.getFeatures() 
  }

  /**
   * this will fetch the information use the api call
   */
  getFeatures() {
    this.main.getFeatures().subscribe(
    {
      next: (res:any) => {
        this.forFeatures = res  
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    }
    )
  }

}
