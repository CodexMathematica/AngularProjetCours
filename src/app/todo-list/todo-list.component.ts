import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() public allTodos!: Todo[]; // Recupere les todos du parent

  constructor(private todoService: TodoService) { } // Injection de dependance du service pour pouvoir utiliser ses méthodes

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodos(todo); //Appel la methode du service qui sert a faire la deletion
    this.allTodos = this.todoService.getTodos(); //Remet à jours la liste
  }
}
