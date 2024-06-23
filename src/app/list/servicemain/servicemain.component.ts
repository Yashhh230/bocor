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
  collectionSize = 1
  constructor(public main: ForserviceService , public route : Router) { }
  forService: any = {}
  ngOnInit(): void {
    // this.serviceData()
    this.forApiCall()
  }

  /**
   * this will help to store the data and show using api call 
   * 
   */
  // serviceData() {
  //   this.main.forData().subscribe({
  //     next: (res:any) => {
  //       this.forService = res  
  //     },
  //     error: (err:any) => {
  //     },
  //     complete: () => {
  //     }
  //   })
  // }

  forApiCall() {
    this.main.forData().subscribe({
      next: (res:any) => {
        this.forService = res
        // .slice
        this.collectionSize = res.card.length
        this.forService.card = res.card.slice((this.page-1) * this.pageSize, this.page * this.pageSize)
        
        console.log(res,"hello")
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
