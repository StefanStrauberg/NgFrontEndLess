import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Todo {
  title: string,
  complited: boolean,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  todos: Todo[] = [];

  todoTitle = '';

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(response => {
        console.log('Response', response);
        this.todos = response;
      });
  }

  addTodo(){
    if(!this.todoTitle.trim()) {
      return
    }

    const newTodo:Todo = { title: this.todoTitle, complited: false }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(response => {
        console.log('Post Response', response);
        this.todos.push(response);
        this.todoTitle = '';
      });
  }
}
