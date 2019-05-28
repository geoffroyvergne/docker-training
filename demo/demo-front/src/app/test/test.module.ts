import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { NgBootstrapSharedModule } from '../common/shared/ngbootstrap.module';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule, NgBootstrapSharedModule
  ]
})
export class TestModule { }
