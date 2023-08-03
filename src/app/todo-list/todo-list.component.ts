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
  todoslist : Array<Todo> = [{status: false,name:"Todo1"},{status:true,name:"Todo2"},{status:false,name:"Todo3"}]; 
  tdo : string = " ";
  

  constructor() {
  }

  // addTodo(todolistelement : Todo = {status:false,name:"Todo List Element"}) {
  //   var todolistVar = todolistelement;
  //   this.todoslist.push(todolistVar);
  // }
  
  addTodo(name:string){
     let to = new Todo();
     to.name = name
     to.status = false;
     this.todoslist.push(to);
  }

  ngOnInit(): void {
  }

}
