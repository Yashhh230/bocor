import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{

  constructor(public main: HeaderService) {}

  forImage:any[] = []

  ngOnInit(): void {
    this.forHero()
  }

  /**
   * this getting value from the api call 
   */
  forHero() {
    this.main.getHero().subscribe({
      next: (res:any) => {
        this.forImage = res
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }

  /**
   * 
   * @param value this will the height value
   * @param value1 this will the width value 
   */
  func2(value : any , value1:any) {
    value = '1200',
      value1 = '1200'
  }
}
