import { Injectable } from '@angular/core';
import { HttpService } from '../common/service/http.service';
import 'rxjs/add/operator/toPromise';
import { Status } from '../common/modele/status.modele';

@Injectable()
export class DebugService {

  constructor(public httpService: HttpService) { }

  public getTest(): string {
    return 'test';
  }

  public getStatus(): Status {
    const status: Status = {
      code: 0,
      message: 'test'
    };

    return status;
  }

  getStatusPromise(url): Promise<void | Status> {
    return this.httpService.get(url)
      .toPromise()
      .then((response) => {
        return this.httpService.extractData(response) as Promise<void | Status>;
      }).catch((error) => {

      });
  }
}