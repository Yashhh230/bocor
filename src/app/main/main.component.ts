import { Component, HostListener } from '@angular/core';
import { HeaderService } from '../shared/services/header.service';
import { ForserviceService } from '../shared/services/forservice.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  mainsection: string = '';

  constructor(
    public main: HeaderService,
    public forall: ForserviceService,
    public viewport: ViewportScroller
  ) {}
  /**this is the array from storing value from api call */
  headerData: any;
  List: any = [];
  isShow:any
  topPosToStartShowing = 100;
  ngOnInit(): void {
    this.forGetData();
    this.main.forchange.subscribe((id: any) => {
      this.forScrolling(id);
    });
  }

  /**
   * this is the data from the api call
   */
  forGetData() {
    this.main.getHeader().subscribe({
      next: (res: any) => {
        this.headerData = res;
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }

  forScrolling(value: string): void {
    setTimeout(() => {
      
      this.viewport.scrollToAnchor(value);
    }, 3000);
  }
  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  goForTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
