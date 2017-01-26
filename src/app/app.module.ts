import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { TodoActions } from './todo.actions';
import { todoReducer } from './todo.reducer';

import { environment } from '../environments/environment';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      todo: todoReducer,
    }),
    ...(environment.production
        ? []
        : [StoreDevtoolsModule.instrumentOnlyWithExtension({})]),
  ],
  providers: [
    TodoActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
