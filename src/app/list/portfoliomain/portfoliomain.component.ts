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

  forcardsLength = 1
  pagesize = 6
  page = 1

  /**
   * this will change the filter 
   */
  currentFilter: string = 'all';
  constructor(public main: HeaderService, public route: Router) { }
   



  ngOnInit(): void {
   
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
  load(getImages : boolean = false) {
    // this.forFilter = [...this.forFilter, ...this.forFilter]

    if (this.forcardsLength > this.forFilter) {
      
    }
    this.main.getportfolio().subscribe({
      next: (res: any) => {

        if (getImages) {
          this.forFilter.push(...res.cards.slice(this.forFilter , this.pagesize * this.page))
        }
        else {
          this.forportfolio = res
          this.forcardsLength = res.cards.length
          this.forFilter = this.forportfolio.cards.slice(0, this.pagesize)
        }
        this.page++
      },
      error: (err: any) => {
      },
      complete: () => {
      }
    })
  }

}
