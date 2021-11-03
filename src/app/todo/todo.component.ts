import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public allTodos!: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addToDo(form : any) {
    this.todoService.createTodo(form.value);
    form.reset(); //vide les champs du formulaire une fois le submit triggered.
    this.allTodos = this.todoService.getTodos();
  }

}
