import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug.component';
import { HttpSharedModule } from '../common/shared/http.module';

@NgModule({
  declarations: [DebugComponent],
  imports: [
    CommonModule, HttpSharedModule
  ]
})
export class DebugModule { }
