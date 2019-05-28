import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from '../service/http.service';
import {RouterTestingModule} from '@angular/router/testing';

@NgModule({
  declarations: [

  ],
  exports: [ ],
  imports: [ HttpModule, RouterTestingModule.withRoutes([]) ],
  providers: [ HttpService ]
})

export class HttpSharedModule {

}