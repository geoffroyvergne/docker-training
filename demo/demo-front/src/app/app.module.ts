import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TestModule} from './test/test.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {appRoutingProviders, routing} from './app.routing';
import {APP_BASE_HREF} from '@angular/common';
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DebugModule } from './debug/debug.module';
import { TodoModule } from './todo/todo.module';
import { HelpModule } from './help/help.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, routing, FormsModule,
    AppRoutingModule, 
    TestModule, HomeModule, NavModule, DebugModule, TodoModule, HelpModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
