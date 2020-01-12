import { Injectable } from '@angular/core';
import { HttpService } from '../common/service/http.service';
import 'rxjs/add/operator/toPromise';
import { Todo } from '../common/modele/todo.modele';
import { Status } from '../common/modele/status.modele';
import { SettingsService } from '../common/service/settings.service';

@Injectable()
export class TodoService {
  resourceUrl: string

  constructor(public httpService: HttpService, settingsService: SettingsService) { 
    this.resourceUrl = settingsService.settings.apiUrl + '/api/backend/todo/';
  }

  getAll(): Promise<void | Todo[]> {
    return this.httpService.get(this.resourceUrl)
      .toPromise()
      .then((response) => {
        return this.httpService.extractData(response) as Promise<void | Todo[]>;
      }).catch((error) => {

      });
  }

  addEdit(todo: Todo): Promise<void | Status> {
    return this.httpService.put(this.resourceUrl, todo)
    .toPromise()
      .then((response) => {
        return this.httpService.extractData(response) as Promise<void | Status>;
      }).catch((error) => {

      });
  }

  delete(id: number): Promise<void | Status> {
    return this.httpService.delete(this.resourceUrl + '/id/' + id)
    .toPromise()
      .then((response) => {
        return this.httpService.extractData(response) as Promise<void | Status>;
      }).catch((error) => {

      });
  }
}