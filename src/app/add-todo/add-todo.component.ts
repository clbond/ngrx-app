import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() public add = new EventEmitter<string>();

  public description: string;

  onAdd() {
    this.add.emit(this.description);

    this.description = null;
  }
}
