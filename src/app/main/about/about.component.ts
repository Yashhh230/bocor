import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { ViewmoreComponent } from './viewmore/viewmore.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 
  /**
   * this will the mainList object 
   */
  mainList: any = {}
  /**
   * this will showpop variable
   */
  showpop: any
  /**
   * this will a variable for showmore button 
   */
  showMore: boolean = false;
  /**
   * this will be the vcr method for componenet
   */
  @ViewChild('tpl', { read: ViewContainerRef })
  tpl!: ViewContainerRef;

  constructor(public main: HeaderService) { }
  

  ngOnInit(): void {
    this.forLoad()
  }

  /**
   * this will generate the data using api call
   */
  forLoad() {
    this.main.getAbout().subscribe({
      next: (res:any) => {
        this.mainList = res
        //this will show for showmore button 
        this.showMore = this.mainList.smallLabel1.length >= 100      
      },
      error: (err: any) => {
      },
      complete: () => {
      }
         
    })
    
  }
 
  /**
   * 
   * @param data this will be method for generatie a popup for more details
   * it will show on the screen and show all the details use in the data
   */
  showsMore(data:any) {
    this.tpl.clear()
    const component = this.tpl.createComponent(ViewmoreComponent)
    component.instance.datavar = data;
   document.body.style.overflow = 'hidden';
    component.instance.myOutput.subscribe((data: any) => {
      if (data == false) {
        document.body.style.overflow = 'auto'; 
        this.showpop = true
      }
    })
  }

 
    
    
    

}
