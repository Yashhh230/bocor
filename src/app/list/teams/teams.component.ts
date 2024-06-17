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
  forTeamData() {
    this.main.forTeam().subscribe({
      next: (res: any) => {
        this.forTeamService = res
        this.forGenerate()
      },
      error: (err: any) => {
      },
      complete: () => {
      }
    })
  }
  Back() {
    this.route.navigate(['/main'])
  }
  @HostListener("window:scroll", [])
  forGenerate(): void {
    if (this.forTeamService?.teamMember.length <40) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
        this.Teams = [...this.Teams, ...this.forTeamService?.teamMember.slice(this.index, this.index + 4)];
        this.index+=4
      }
    }
  }
}
