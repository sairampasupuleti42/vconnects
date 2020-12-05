import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule

  ], exports: [HeaderComponent, FooterComponent, RouterModule, HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule]
})
export class SharedModule { }
