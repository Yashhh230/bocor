import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeroComponent } from './hero/hero.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ViewmoreComponent } from './about/viewmore/viewmore.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollerComponent } from './scroller/scroller.component';


@NgModule({
  declarations: [
    MainComponent,
    HeroComponent,
    ClientsComponent,
    AboutComponent,
    ServicesComponent,
    FeaturesComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    ViewmoreComponent,
    ScrollerComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule , ReactiveFormsModule
  ],
})
export class MainModule {}
