import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForserviceService } from 'src/app/shared/services/forservice.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent {
  constructor(public main: HeaderService, public forall: ForserviceService , public route : Router) { }
  /**
   * this will show the list
   */
  List : any 
  ngOnInit(): void {
    this.getLocalStorge()
  }
  
  
/**
 * this will get the details from the subscriber form localstorage
 */
getLocalStorge() {
  let value = localStorage.getItem('subscriberForm')
  if (value) {
    this.List= JSON.parse(value)
    
  }

}
  /**
   * redirect to the main page 
   */
  clickbutton() {
  this.route.navigate(['/main'])
}
}
