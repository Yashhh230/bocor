import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmainComponent } from './listmain/listmain.component';
import { ServicesComponent } from '../main/services/services.component';
import { ServicemainComponent } from './servicemain/servicemain.component';
import { TeamComponent } from '../main/team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { PortfolioComponent } from '../main/portfolio/portfolio.component';
import { PortfoliomainComponent } from './portfoliomain/portfoliomain.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { FaqforComponent } from './faqfor/faqfor.component';
import { ContactformComponent } from './contactform/contactform.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'list'
  },
  {
    path: 'list',
    component:ListmainComponent
  },
  {
    path: 'service',
    component:ServicemainComponent
  }, {
    path: 'team',
    component:TeamsComponent
  },
  {
    path: 'portfolio',
    component:PortfoliomainComponent
  },
  {
    path: 'subscriber',
    component:SubscriberComponent
  }, {
    path: "faq",
    component:FaqforComponent
  },
  {
    path: 'contact/:id',
    component:ContactformComponent
  },
  {
    path: 'contact',
    component:ContactformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
