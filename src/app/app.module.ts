import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FootballPlListComponent } from './football-pl-list/football-pl-list.component';
import { FootballPlayerComponent } from './football-player/football-player.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    TodoComponent,
    TodoListComponent,
    FootballPlListComponent,
    FootballPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
