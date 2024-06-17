import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForserviceService } from 'src/app/shared/services/forservice.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent  implements OnInit{
 
  constructor(public main: ForserviceService , public route : Router) { }
   
  forTeamService: any = {}
  
  ngOnInit(): void {
    this.forTeamData()
  }

    /**
   * this can get the details from the api call 
   */
  forTeamData() {
    this.main.forTeam().subscribe({
      next: (res:any) => {
        this.forTeamService = res   
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }

  forView() {
    this.route.navigate(['/list/team'])
  }

}
