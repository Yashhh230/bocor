import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListmainComponent } from './list/listmain/listmain.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch:'full'
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainModule),
    component: MainComponent,
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then((m) => m.ListModule),
    component: ListmainComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
