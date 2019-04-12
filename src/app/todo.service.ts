import { Injectable } from '@angular/core';
import {TodoModel} from './Model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: TodoModel [];
  todoadd: TodoModel;
  constructor() {
    this.todos = [
      new TodoModel( 'lundi',  'travailler')
    ];
  }
   gettodos(): TodoModel[] {
    return this.todos;
  }

  addtodos(todo: TodoModel) {
    this.todos.push(todo);
  }

  deletetodos(todo: TodoModel) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    } else {
      alert ('todo n existe pas');
    }

  }

}
