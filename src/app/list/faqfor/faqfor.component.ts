import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForserviceService } from 'src/app/shared/services/forservice.service';

@Component({
  selector: 'app-faqfor',
  templateUrl: './faqfor.component.html',
  styleUrls: ['./faqfor.component.scss']
})
export class FaqforComponent {
 
  forCat:any 
  /**
   * this is the faqlist object
   */
  faqList: any = {}
  
  /**
   * this is the category list array
   */
  categoryList: any = []
  /**
   * this is the filter category list array
   */
  filterCategoryList: any[] = []
  /**
   * this is the the showmore for check the true or false
   */
  showMore: boolean = true;
  constructor(public main: ForserviceService , public route : Router) { }
  

  ngOnInit(): void {  
    this.getData()
  }
/**
 * this will get the data using service
 * this will help to change the data 
 */
  getData() {
    this.main.forFaq().subscribe({
      next: (res:any) => {
        this.faqList = res
        this.categoryList = this.faqList.QA
        this.extractData()
        this.categoryChange('category1')
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }
  /**
   * this will show the category according the array of category
   */
  extractData() {
    const data = new Set (this.faqList.QA.map((i: any) => i.category))
    this.categoryList = Array.from(data)
   }

  /**
   * 
   * @param li this will change the category which is selected by the user
   * this will help to change the question of category for the user
   */
  categoryChange(li: any) {

    this.filterCategoryList = this.faqList.QA.filter((e: any) => {
     this.forCat ===li 
     return e.category === li
    })
  }
  /**
   * this will redirect to main 
   */
  back() {
    this.route.navigate(['/main'])
  }
}
