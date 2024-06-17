import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
 /**
  * this is the client array
  */
  forClient: any[] = []
  
  constructor(public main: HeaderService) { }
  
  ngOnInit(): void {
    this.forClients()
  }
  
/**
 * this is the api call which can help to store in variable and use to show data 
 */
  forClients() {
    this.main.getClient().subscribe({
      next: (res:any) => {
        this.forClient = res  
        console.log(this.forClient,":;;;;")
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }

}
