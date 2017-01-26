import { Action } from '@ngrx/store';

import * as actions from './todo.actions';

import { Todo, TodoState } from './app.state';

export const initialState = {list: new Array<Todo>()};

export function todoReducer(state: TodoState = initialState, action: Action): TodoState {
  switch (action.type) {
    case actions.ADD_TODO:
      return Object.assign({}, state, {
        list: state.list.concat([{description: action.payload.description, complete: false}]),
      });

    case actions.REMOVE_TODO:
      return Object.assign({}, state, {list: [
        ...state.list.slice(0, action.payload.index),
        ...state.list.slice(action.payload.index + 1),
      ]});

    case actions.COMPLETE_TODO:
      const list = state.list.map((v, index) => {
        if (index === action.payload.index) {
          return {description: v.description, complete: !v.complete};
        }
        return v;
      });
      return Object.assign({}, state, {list});

    default:
      return state;
  }
};
