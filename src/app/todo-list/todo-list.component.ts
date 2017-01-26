import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Todo } from '../app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Output() public remove = new EventEmitter<number>();
  @Output() public complete = new EventEmitter<number>();

  @Input() public list: Observable<Array<Todo>>;

  onRemove(event: MouseEvent, index: number) {
    event.stopPropagation();

    this.remove.emit(index);
  }
}
