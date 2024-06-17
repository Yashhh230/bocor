import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForserviceService } from 'src/app/shared/services/forservice.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  /**this is the faqlist object */
  faqList:any ={}
  showMore: boolean = true;

  constructor(public main: ForserviceService , public route : Router) { }
  

  ngOnInit(): void {
    this.getData()
  }

    /**this will fetch the data using api call */

  getData() {
    this.main.forFaq().subscribe({
      next: (res:any) => {
        this.faqList = res
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }
  /**
   * this will redirect to the faq page
   */
  forMore() {
    this.route.navigate(['/list/faq'])
  }
}
