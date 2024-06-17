import { Component } from '@angular/core';
import { ForserviceService } from 'src/app/shared/services/forservice.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  constructor(public main: ForserviceService) { }
   
  forPricing: any
  
  ngOnInit(): void {
    this.forTeamData()
  }

   /**
   * this can get the details from the api call 
   */
  forTeamData() {
    this.main.forService().subscribe({
      next: (res:any) => {
        this.forPricing = res   
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }
}
