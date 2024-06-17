import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-portfoliomain',
  templateUrl: './portfoliomain.component.html',
  styleUrls: ['./portfoliomain.component.scss']
})
export class PortfoliomainComponent {
  /**
   * this is the portfolio object
   */
  forportfolio: any = {}
  /**
   * this is the for filter array
   */
  forFilter: any = []

  /**
   * this will change the filter 
   */
  currentFilter: string = 'all';
  constructor(public main: HeaderService, public route: Router) { }
  
  ngOnInit(): void {
    this.main.getportfolio().subscribe({
      next: (res: any) => {
        this.forportfolio = res
        this.forFilter = this.forportfolio.cards.slice(0,6)
      },
      error: (err: any) => {
      },
      complete: () => {
      }
    })
  }

  /**
   * this will help to filter the data according to click button 
   * @param filter this will can filter by his name all, web , app,card
   */
  filters(filter: any) {
    if (filter == 'all') {
      this.forFilter = this.forportfolio.cards
    } else if (filter == 'app') {
      this.forFilter = this.forportfolio.cards.filter((e: any) => {
        return e.forunique.category == "app"
      });
    } else if (filter == 'card') {
      this.forFilter = this.forportfolio.cards.filter((e: any) => {
        return e.forunique.category == "card"
      })
    }  else if (filter == 'web') {
      this.forFilter = this.forportfolio.cards.filter((e: any) => {
        return e.forunique.category == "web"
      })
    }
  }

/**
 * this will back to the main page  
 */
Back() {
    this.route.navigate(['/main'])
  }

  /**
   * this will load the more data in the form 
   */
  load() {
    this.forFilter= [...this.forFilter, ...this.forFilter]
  }

}
