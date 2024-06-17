import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { ForserviceService } from '../../services/forservice.service';
import { ForfooterService } from '../../services/forfooter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mainsection: string = '';
  show:boolean = false
  constructor(public main: HeaderService, public forall: ForserviceService , public forSer : ForfooterService) {}
  /**this is the array from storing value from api call */
  headerData: any[] = [];
  List: any = [];
  close:any
  ngOnInit(): void {
    this.forGetData();
    this.getLocalStorge();
    this.main.forchange.subscribe((id: any) => {
      this.mainsection = id;
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
  /**
   * this can fetch the data from the localstorage ans show only last three value for the contact list
   */
  getLocalStorge() {
    let value = localStorage.getItem('Loginform');
    if (value) {
      let list = JSON.parse(value);
      // this.List = list.slice(-3);
      this.forSer.forContact.next(list.slice(-3))

    }
  }
  /**
   * 
   * @param id this will show the which id is active 
   * @returns return the current id 
   */
  Activated(id: string): boolean {
    return this.mainsection == id;
  }
  /**
   * 
   * @param value this will get the value of current id
   * @param event this will be prevent unnessary calling
   */
  forScrolling(value: string, event: Event): void {
    event.preventDefault();
    this.main.forchange.next(value.substring(1));
    console.log(this.show,"this.show")
  }

  forOpen() {
    this.show = !this.show
    console.log(this.show,"this.show1")    
}

}
