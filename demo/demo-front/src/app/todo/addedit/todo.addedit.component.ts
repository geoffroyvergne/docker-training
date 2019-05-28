import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../../common/modele/todo.modele';

@Component({
    selector: 'app-todo-addedit',
    providers: [ TodoService ],
    templateUrl: './todo.addedit.component.html',
})
export class TodoAddeditComponent implements OnInit {
    @Input() todo: Todo;
    @Output() changeAddEditFormVisible = new EventEmitter<boolean>();
    public todoPromiseLoading: boolean;

    constructor(private todoService: TodoService) { }

    ngOnInit() {
    }

    public close(): void {
        this.changeAddEditFormVisible.emit(false);
    }

    public onSubmit(todoForm: Todo) {
        if (this.todo.id) {
            todoForm.id = this.todo.id;
        } 

        console.log('onSubmit : ' + JSON.stringify(todoForm));
        this.addEdit(todoForm);
    }

    public addEdit(todo: Todo): void {
        console.log('add : ' + JSON.stringify(todo));

        todo.todate = new Date();
        todo.todate.setMonth(todo.parsedDate.month -1);
        todo.todate.setFullYear(todo.parsedDate.year);
        todo.todate.setDate(todo.parsedDate.day);
    
        this.todoPromiseLoading = true;
    
        this.todoService.addEdit(todo).then(status => {
          this.todoPromiseLoading = false;
          this.close();
        }).catch(error => {
          this.todoPromiseLoading = false;
        });
    }
}
