import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    {id: 1, description: 'Learn Angular 17'},
    {id: 2, description: 'Become Java Spring Expert'},
    {id: 3, description: 'Develop microservices'}
  ]

  constructor() { }

  ngOnInit() {
  }

}