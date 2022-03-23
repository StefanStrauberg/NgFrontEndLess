import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, Observable, throwError, map, tap } from "rxjs";

export interface Todo{
    id?: number,
    completed: boolean,
    title: string
}

@Injectable({providedIn: 'root'})
export class TodosService{
    constructor(private http: HttpClient){}

    fetchTodos(): Observable<Todo[] | any>{
        let params = new HttpParams();
        params = params.append('_limit','4');
        params = params.append('custom', 'anything');
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
            // params: new HttpParams().set('_limit','3')
            params,
            observe: 'response'
        })
            .pipe(
                map(response => {
                    console.log('Response: ', response);
                    return response.body;
                }),
                delay(1000),
                catchError(error => {
                    console.log('Error: ',error.message);
                    return throwError(error);
                })
            );
    }
    
    addTodo(todo: Todo): Observable<Todo>{
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
            headers: new HttpHeaders({
                'MyCustomHeader': 'Alach AKbar! Fuck You! Muther Fucker!'
            })
        });
    }

    removeTodo(id: number): Observable<any>{
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            observe: 'events'
        }).pipe(
            tap(event => {
                if(event.type === HttpEventType.Sent){
                    console.log('Remove Event Sent: ',event);
                }
                if(event.type === HttpEventType.Response)
                {
                    console.log('Remove Event Response: ',event);
                }
            })
        );
    }

    completeTodo(id: number): Observable<Todo | any>{
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,{
             completed: true
            }, {
                //responseType: 'json' // Default
            }
        );
    }
}