import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { APIService } from '../common/api.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoService extends APIService{

private resourceUrl = 'api/todo';
private todos: Todo[] = [
      new Todo('todo 1'),
      new Todo('todo 2', 1, true),
      new Todo('todo 3')
    ];

list(): Observable<Todo[]> {
    return this.get(this.resourceUrl);
  }

create(description,priority,completed): Observable<Todo> {
   return this.post(description,priority,completed);
 }  

}
