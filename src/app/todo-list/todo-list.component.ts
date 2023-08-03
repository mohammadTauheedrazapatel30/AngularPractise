import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../dto/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // Assuming this as Parent Component for sharing data in BETWEEN COMPONENTS

  // Property
  todoslist : Array<Todo> = []; 
  tdo : string = " ";

  constructor(public _todoService : TodoService, public _todosInput : Todo) {

      this.todoslist = this._todoService.todos;
      this._todoService.tdo = this.tdo;
  }

  addTodo(todolistelement : Todo = {status:false,name:"Todo List Element"}) {
    var todolistVar = todolistelement;
    this.todoslist.push(todolistVar);
  }

  ngOnInit(): void {
  }

}
