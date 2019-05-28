import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from '../common/modele/todo.modele';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  providers: [ TodoService ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoPromise: void | Todo[];
  public todo: Todo;
  public todoPromiseLoading: boolean;
  public addEditFormVisible: boolean;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getAll();
  }

  changeAddEditFormVisible(event: boolean) {
    this.addEditFormVisible = event;

    if (! event) this.getAll();
  }

  public addEditForm(todo: Todo): void {
    if(this.addEditFormVisible) return;

    if(! todo) {
      todo = new Todo();
      todo.done = false;
      todo.todate = new Date();
    }

    todo.todate = new Date(todo.todate);

    //const date: NgbDateStruct = { year: 1789, month: 7, day: 14 };

    const parsedDate: NgbDateStruct = {
      day: todo.todate.getDate(),
      month: todo.todate.getMonth() + 1,
      year: todo.todate.getFullYear(),
    };

    todo.parsedDate = parsedDate;

    this.todo = todo;
    this.addEditFormVisible = true;
    
    console.log('addEditForm : ' + JSON.stringify(todo));
  }

  public getAll(): void {
    this.todoPromiseLoading = true;

    this.todoService.getAll().then(todo => {
      this.todoPromise = todo;
      this.todoPromiseLoading = false;
    }).catch(error => {
      this.todoPromiseLoading = false;
    });
  }

  public delete(todo: Todo): void {
    console.log('delete : ' + JSON.stringify(todo));

    this.todoPromiseLoading = true;

    this.todoService.delete(todo.id).then(status => {
      this.todoPromiseLoading = false;
      this.getAll();
    }).catch(error => {
      this.todoPromiseLoading = false;
    });
  }
}
