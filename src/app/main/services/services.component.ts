import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForserviceService } from 'src/app/shared/services/forservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
   
  constructor(public main: ForserviceService, public route: Router) { }
  /**
   * this will for the service array
   * 
   */
  forService: any[] = []
  forSlice: any[] = []
  
  forOnly = 4

  ngOnInit(): void {
    this.serviceData()
  }
  /**
   * this will for the geting the data from the api 
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

  loadmore() {
    this.route.navigate(['/list/service'])
  }
  

}
