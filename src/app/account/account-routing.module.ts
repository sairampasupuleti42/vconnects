import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignoutComponent } from './components/signout/signout.component';

const accountRoutes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signout',
        component: SignoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
