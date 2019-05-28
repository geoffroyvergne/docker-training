import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [ NgbModule  ],
  imports: [
    NgbModule.forRoot()
  ],
  declarations: [ ],
  // providers: [ NgbActiveModal ]
})

export class NgBootstrapSharedModule {

}
