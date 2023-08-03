import { Injectable } from '@angular/core';
import { Todo } from './dto/todo';

@Injectable({
  providedIn: "root"
})
export class TodoService {

  constructor() { }
  
  todos : Array<Todo> = []

  tdo : string = "Todo Name";
  
}
