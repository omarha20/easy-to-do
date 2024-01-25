import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { todo, TodoService } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  constructor(private todoS: TodoService, private loc: Location) {}
  get todos(): todo[] {
    const filter = this.loc.path().split('/')[1] || 'all';
    return this.todoS.getItems(filter)
  }
  get active(): todo[] {
    return this.todoS.getItems('active')
  }
}
