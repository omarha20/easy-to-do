import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { todo } from '../todo.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private todoS: TodoService) {}
  @Input() todo!: todo;
note = '';
// show = false;
Add() {
  this.todoS.AddTodo(this.note);
  this.note = '';
  // this.show = true;
}
toggleTodo(): void {
  this.todo.completed = !this.todo.completed;
}
get todos(): todo[] {
  return this.todoS.getItems();
}
toggle() {
  this.todoS.ToggleAll();
}
}
