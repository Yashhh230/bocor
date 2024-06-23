import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ForserviceService } from 'src/app/shared/services/forservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  constructor(public main: ForserviceService, public route: Router) { }
  /**
   * this will be forteamservice object to show the all details
   */
  forTeamService: any = {}
  images = 1
  pageSize = 4 
  page = 1 
  /**
   * this is the team array
   */
  Teams: any[] = []
  index = 0
  ngOnInit(): void {
    this.forTeamData()
  }
  /**
   * this will subscribe the data and generate the result using api call
   */
  forTeamData(data: boolean = false) {
    if (this.images > this.forTeamService?.teamMember?.length) {
      this.main.forTeam().subscribe({
        next: (res: any) => {
          if (data) {
            this.forTeamService?.teamMember.push(...res?.teamMember.slice(this.forTeamService?.teamMember.length,this.pageSize * this.page) )   
          }
          else {
            this.forTeamService = res
            console.log(res,"res")
            this.images = res?.teamMember.length
            this.forTeamService.teamMember = res?.teamMember.slice(0, this.pageSize)
          }
        },
        error: (err: any) => {
        },
        complete: () => {
        }
      })
    }
  }
  Back() {
    this.route.navigate(['/main'])
  }
  @HostListener("window:scroll", [])
  forGenerate(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
      this.forTeamData(true)
    }
  }
}
