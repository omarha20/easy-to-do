import { Component, OnInit } from '@angular/core';
import { todo } from '../todo.service';
import { TodoService } from '../todo.service';
import { RouterLink } from '@angular/router';
import { interval } from 'rxjs';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  constructor(private todoS: TodoService) {}
  ngOnInit() {
    
  }
  get todo(): todo[] {
    return this.todoS.getItems();
  }
  get activeTodos(): todo[] {
    return this.todoS.getItems('active');
  }
  startTimer(): void {
    const timer = interval(1000); // Interval in milliseconds (1000 ms = 1 second)

    timer.subscribe(() => {
      this.activeTodos;
    });
  }

}
