import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, Observable, throwError } from "rxjs";

export interface Todo{
    id?: number,
    completed: boolean,
    title: string
}

@Injectable({providedIn: 'root'})
export class TodosService{
    constructor(private http: HttpClient){}

    fetchTodos(): Observable<Todo[]>{
        let params = new HttpParams();
        params = params.append('_limit','4');
        params = params.append('custom', 'anything');
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
            // params: new HttpParams().set('_limit','3')
            params
        })
        .pipe(delay(1000),
        catchError(error => {
            console.log('Error: ',error.message);
            return throwError(error);
        })
        );
    }
    
    addTodo(todo: Todo): Observable<Todo>{
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
            headers: new HttpHeaders({
                'MyCustomHeader': Math.random().toString()
            })
        });
    }

    removeTodo(id: number): Observable<void>{
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }

    completeTodo(id: number): Observable<Todo>{
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,{ completed: true});
    }
}