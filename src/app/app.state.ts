export interface Todo {
  description: string;
  complete: boolean;
}

export interface TodoState {
  list: Array<Todo>;
}

export interface AppState {
  todo: TodoState;
}

// {todo: {list: ['Get groceries', 'Pick up kids']}}