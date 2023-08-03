import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../todo.service';
import { Todo } from '../dto/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  constructor() {}

  @Output() dataEvent = new EventEmitter<string>()
   
  // Todo Input Passing data in todos prop
  @Input() todos : Todo[] = [{status:false, name:"Todo Component"}];

  addUser(value:string){
    this.dataEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
