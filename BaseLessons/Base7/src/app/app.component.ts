import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  todos: Todo[] = [];

  loading:boolean = false;

  todoTitle = '';

  constructor(private todoService: TodosService){}

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo(){
    if(!this.todoTitle.trim()) {
      return
    };

    this.todoService.addTodo({ title: this.todoTitle, completed: false }).subscribe(response => {
      this.todos.push(response);
      console.log('PostResponse', response);
      this.todoTitle = '';
    });
  }

  fetchTodos(){
    this.loading = true;
    this.todoService.fetchTodos().subscribe(response => {
      console.log('GetAllResponse', response);
      this.todos = response;
      this.loading = false;
    })
  }

  removeTodo(id: number | undefined){
    this.todoService.removeTodo(<number>id)
      .subscribe(response => {
        console.log('DeleteResponse', response);
        this.todos = this.todos.filter(x => x.id !== id);
      })
  }
}
