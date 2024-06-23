import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  /**
   * this is the forporfolio object
   */
  forportfolio: any = {};

  forFilter: any = [];

  constructor(public main: HeaderService, public route: Router) {}

  ngOnInit(): void {
    this.forClients();
  }

  /**
   * this can get the details from the api call
   */
  forClients() {
    this.main.getportfolio().subscribe({
      next: (res: any) => {
        this.forportfolio = res;
        this.forFilter = this.forportfolio.cards;
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }
  /**
   * this can filter categories by particulary click
   * @param filter this can help to filter categories
   */
  filters(filter: any) {
    if (filter === 'all') {
      this.forFilter = this.forportfolio.cards;
    } else if (filter === 'app') {
      this.forFilter = this.forportfolio.cards.filter(
        (ele: any) => ele.forunique['category'] === 'app'
      );
    } else if (filter === 'card') {
      this.forFilter = this.forportfolio.cards.filter(
        (ele: any) => ele.forunique['category'] === 'card'
      );
    } else if (filter === 'web') {
      this.forFilter = this.forportfolio.cards.filter(
        (ele: any) => ele.forunique['category'] === 'web'
      );
    }
  }

  loadMore() {
    this.route.navigate(['/list/portfolio']);
  }
}
