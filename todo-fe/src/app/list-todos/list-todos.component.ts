import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { response } from 'express';

export class Todo {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public targetDate: Date,
    public status: boolean
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [
    // new Todo(1, 'Learn Angular 17', false, new Date()),
    // new Todo(2, 'Become Java Spring Expert', false, new Date()),
    // new Todo(3, 'Develop microservices', false, new Date()),
    // new Todo(4, 'Become a full stack developer', false, new Date())
  ]

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos("wl99-human").subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
}