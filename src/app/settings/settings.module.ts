import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { PreferencesComponent } from './preferences/preferences.component';



@NgModule({
  declarations: [PrivacyComponent, PreferencesComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
