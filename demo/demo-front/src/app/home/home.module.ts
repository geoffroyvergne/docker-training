import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgBootstrapSharedModule } from '../common/shared/ngbootstrap.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, NgBootstrapSharedModule
  ]
})
export class HomeModule { }
