import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooerComponent } from './components/fooer/fooer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[],
  imports: [CommonModule, ReactiveFormsModule],
  exports:[NgbModule,RouterModule]
})
export class SharedModule {}
