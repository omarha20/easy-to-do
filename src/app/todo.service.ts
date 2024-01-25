import { Injectable } from '@angular/core';
export interface todo {
  title: string,
  completed: boolean,
  currentStyles: any
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: todo[] = [];
  check = false;
  constructor() { }
  AddTodo(title: string) {
    const todo: todo = {
      title: title,
      completed: false,
      currentStyles: {}
    }
    this.todo.push(todo)
  }
  ToggleAll() {
    const isChecked = !this.check;
    this.todo.forEach(todo => {
      todo.completed = isChecked;
      todo.currentStyles = this.setCurrentStyles(todo.completed);
    });
  
    // Update the value of isChecked
    this.check = isChecked;
  }
  currentStyles = {};
  setCurrentStyles(checked: boolean): any {
    return {
      'text-decoration': checked ? 'line-through' : 'none',
      'color': checked ? 'gray' : 'black'
    };
  }
  getItems(type = 'all'): todo[] {
    switch (type) {
      case ('active'):
        return this.todo.filter((todo) => !todo.completed);
      case ('completed'):
        return this.todo.filter((todo) => todo.completed)
    }
    return this.todo;
  }
  removeItem(todo: todo) {
    const index =  this.todo.indexOf(todo)
    this.todo.splice(index, 1);
  }
}
