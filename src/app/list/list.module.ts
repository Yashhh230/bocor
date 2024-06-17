import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListmainComponent } from './listmain/listmain.component';
import { ServicemainComponent } from './servicemain/servicemain.component';
import { NgbAccordionCollapse, NgbAccordionModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { TeamsComponent } from './teams/teams.component';
import { PortfoliomainComponent } from './portfoliomain/portfoliomain.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { FaqforComponent } from './faqfor/faqfor.component';
import { ContactformComponent } from './contactform/contactform.component';


@NgModule({
  declarations: [
    ListmainComponent,
    ServicemainComponent,
    TeamsComponent,
    PortfoliomainComponent,
    SubscriberComponent,
    FaqforComponent,
    ContactformComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    NgbPagination,
    NgbAccordionCollapse,
    NgbAccordionModule
  ]
})
export class ListModule { }
