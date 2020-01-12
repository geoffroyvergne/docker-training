import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { SettingsHttpService } from './common/service/settingshttp.service';

export function app_Init(settingsHttpService: SettingsHttpService) {
  return () => settingsHttpService.initializeApp();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, routing, FormsModule,
    AppRoutingModule, 
    TestModule, HomeModule, NavModule, DebugModule, TodoModule, HelpModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: app_Init, deps: [SettingsHttpService], multi: true },
    { provide: APP_BASE_HREF, useValue : '/' }, appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
