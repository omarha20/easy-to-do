import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todo, TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  constructor(private todoS: TodoService) {}
  @Input({required: true}) todo!: todo;
  @Output() todoDel = new EventEmitter<todo>();
  remove(todo: any) {
    this.todoS.removeItem(todo)
  }
  get active(): todo[] {
    return this.todoS.getItems('active')
  }
  setStyles(e: Event) {
    const input = e.target as HTMLInputElement;
    this.todo.currentStyles = this.setCurrentStyles(input.checked);
  }
  setCurrentStyles(checked: boolean): any {
    return {
      'text-decoration': checked ? 'line-through' : 'none',
      'color': checked ? 'gray' : 'black'
    };
  }
}
