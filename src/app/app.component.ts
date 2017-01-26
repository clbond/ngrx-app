import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from './app.state';

import { TodoActions } from './todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public list: Observable<Array<string>>;

  constructor(
    private store: Store<AppState>,
    private todoActions: TodoActions,
  ) {
    this.list = store.select(s => s.todo.list);
  }

  onAdd(description: string) {
    this.todoActions.add(description);
  }

  onRemove(index: number) {
    this.todoActions.remove(index);
  }

  onComplete(index: number) {
    this.todoActions.complete(index);
  }
}
