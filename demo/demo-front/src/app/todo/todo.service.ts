import { Injectable } from '@angular/core';
import { HttpService } from '../common/service/http.service';
import 'rxjs/add/operator/toPromise';
import { Todo } from '../common/modele/todo.modele';
import { Status } from '../common/modele/status.modele';

@Injectable()
export class TodoService {
  resourceUrl: string = '/api/backend/todo/';

  constructor(public httpService: HttpService) { }

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