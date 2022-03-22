import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, subscribeOn } from 'rxjs';

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

  loading:boolean = false;

  todoTitle = '';

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.fetchTodos();
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

  fetchTodos(){
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(3000))
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      });
  }

  removeTodo(id: number | undefined){
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(response => {
        console.log('DeleteResponse', response);
        this.todos = this.todos.filter(x => x.id !== id);
      })
  }
}
