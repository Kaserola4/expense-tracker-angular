import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ExpenseListService } from '../expense.service';

@Component({
  selector: 'expense-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense-input.component.html',
  styleUrl: './expense-input.component.css'
})
export class ExpenseInputComponent {
  title = new FormControl();
  amount = new FormControl();
  description = new FormControl();
  isRevenue = new FormControl();
  date = new FormControl();

  constructor (private expenseService: ExpenseListService) { }

  addExpense(): void {
    const expense = {
    }

    this.expenseService.addExpense();
  }

}
