import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import {RouterModule} from '@angular/router';
import { NgBootstrapSharedModule } from '../common/shared/ngbootstrap.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, RouterModule, NgBootstrapSharedModule
  ], 
  exports: [NavComponent]
})
export class NavModule { }
