import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(public main: HttpClient) { }
  
  forchange = new Subject<any>();

  getHeader(): Observable<any>{
    return this.main.get('assets/constant/header.json')
  }
  getHero(): Observable<any>{
    return this.main.get('assets/constant/hero.json')
  }
  getClient(): Observable<any>{
    return this.main.get('assets/constant/clients.json')
  }
  getAbout(): Observable<any>{
    return this.main.get('assets/constant/about.json')
  }
  getFeatures(): Observable<any>{
    return this.main.get('assets/constant/features.json')
  }
  getportfolio(): Observable<any>{
    return this.main.get('assets/constant/porfolio.json')
  }

}
