import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  // Assuming this as Parent Component for sharing data in BETWEEN COMPONENTS
  constructor(public _todolist: TodoListComponent) {}

  @Input() name : any

  @Input() obj : any

  @Output() dataEvent = new EventEmitter<string>()

  addUser(value:any){
    this.dataEvent.emit(value)
  }

  ngOnInit(): void {
  }

}
