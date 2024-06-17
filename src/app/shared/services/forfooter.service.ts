import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForfooterService {

  constructor(public main: HttpClient) { }
  
  getFooter(): Observable<any>{
    return this.main.get('assets/constant/footer.json')
  }

  forContact=new BehaviorSubject <any[]>([])
}
