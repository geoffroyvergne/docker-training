import { Component, OnInit } from '@angular/core';
import { Status } from '../common/modele/status.modele'
import {HttpService} from '../common/service/http.service';
import { DebugService } from './debug.service';

@Component({
  selector: 'app-debug',
  providers: [ DebugService ],
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  public statusPromise: void | Status;
  public statusPromiseLoading: boolean;

  constructor(private debugService: DebugService) { }

  ngOnInit() {
  }

  public getDebug(value: String): void {
    this.statusPromiseLoading = true;

    this.debugService.getStatusPromise('/api/backend/debug/' + value).then(status => {
      this.statusPromise = status;
      this.statusPromiseLoading = false;
    }).catch(error => {
      this.statusPromiseLoading = false;
    });
  }
}
