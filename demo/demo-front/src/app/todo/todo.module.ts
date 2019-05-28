import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoAddeditComponent } from './addedit/todo.addedit.component'
import { FormsModule } from '@angular/forms';
import { NgBootstrapSharedModule } from '../common/shared/ngbootstrap.module';

@NgModule({
  declarations: [TodoComponent, TodoAddeditComponent],
  imports: [
    CommonModule, FormsModule, NgBootstrapSharedModule
  ]
})
export class TodoModule { }
