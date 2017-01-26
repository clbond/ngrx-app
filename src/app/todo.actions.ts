import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';

import {AppState} from './app.state';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

@Injectable()
export class TodoActions {
  constructor(private store: Store<AppState>) {}

  add(description: string): void {
    this.store.dispatch({type: ADD_TODO, payload: {description}});
  }

  remove(index: number): void {
    this.store.dispatch({type: REMOVE_TODO, payload: {index}});
  }

  complete(index: number): void {
    this.store.dispatch({type: COMPLETE_TODO, payload: {index}});
  }
}
