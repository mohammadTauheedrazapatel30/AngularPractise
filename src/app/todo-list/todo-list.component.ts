import { Component, OnInit } from '@angular/core';
import { Todo } from '../dto/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private _todolist : Todo) { }

  public btnClick() : void{
    this._todolist.name = "Todo Name"
    this._todolist.status = false
  }

  ngOnInit(): void {
  }

}
