import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForserviceService } from 'src/app/shared/services/forservice.service';

@Component({
  selector: 'app-servicemain',
  templateUrl: './servicemain.component.html',
  styleUrls: ['./servicemain.component.scss']
})
export class ServicemainComponent {

/**
 * this will be page size and starting page
 *  */  
page= 1;
pageSize = 4;
  constructor(public main: ForserviceService , public route : Router) { }
  forService: any[] = []
  ngOnInit(): void {
    this.serviceData()
  }

  /**
   * this will help to store the data and show using api call 
   * 
   */
  serviceData() {
    this.main.forData().subscribe({
      next: (res:any) => {
        this.forService = res  
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }

  /**
   * this  will redirect to main 
   */
  load() {
    this.route.navigate(['/main'])
  }
}
