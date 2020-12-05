import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountComponent } from './components/account.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { SignoutComponent } from './components/signout/signout.component';
@NgModule({
  declarations: [SigninComponent, SignupComponent, AccountComponent, UpdatePasswordComponent, SignoutComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
