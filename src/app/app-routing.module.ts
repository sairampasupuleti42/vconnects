import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(acm => acm.AccountModule)
  },
  {
    path: 'my',
    loadChildren: () => import('./info/info.module').then(acm => acm.InfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
