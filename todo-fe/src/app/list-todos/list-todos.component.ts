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
  todos: Todo[] = [];
  message!: string;

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.retrieveAllTodos("wl99-human").subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo("wl99-human", id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.loadTodos();
      }
    );
  }
}