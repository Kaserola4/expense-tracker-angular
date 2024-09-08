import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseInputComponent } from './expense-list/expense-input/expense-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpenseListComponent, ExpenseInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-tracker-angular';
}
