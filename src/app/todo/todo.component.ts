import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {TodoModel} from '../Model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: TodoModel[];
  title = '';
  decription = '';
  constructor(private firstservice: TodoService) { }

  ngOnInit() {
    console.log(this.firstservice.gettodos());
    this.todos = this.firstservice.gettodos();
  }

   delete(todo: TodoModel) {
    this.firstservice.deletetodos(todo);
   }

   add() {
    const todo = new TodoModel(this.title, this.decription);
    this.firstservice.addtodos(todo);
   }
}
