import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForserviceService {

  constructor(public http: HttpClient) { }
  
  /**
   * 
   * @returns this the return service data 
   */
  forData(): Observable<any>{
    return this.http.get('assets/constant/services.json')
  }

  /**
   * 
   * @returns this returns the team data 
   */
  forTeam(): Observable<any>{
    return this.http.get('assets/constant/team.json')
  }

  /**
   * 
   * @returns this will return the pricing data 
   */
  forService(): Observable<any>{
    return this.http.get('assets/constant/pricing.json')
  }

  /**
   * 
   * @returns this will return frequent data 
   */
  forFaq():Observable<any> {
    return this.http.get('assets/constant/frequent.json')
  }

  /**
   * 
   * @returns this will return the contact data 
   */
  forContact(): Observable<any>{
    return this.http.get('assets/constant/contact.json')
  }

  /**
   * 
   * @returns this will help to store from localStorage
   */
  getLocalStorge() {
    let value = localStorage.getItem('Loginform')
    if (value) {
      return JSON.parse(value)
    }
  }
    
}
