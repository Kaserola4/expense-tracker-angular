import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ExpenseListService } from '../expense.service';

@Component({
  selector: 'expense-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
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
      title: this.title.value,
      amount: this.amount.value,
      description: this.description.value,
      isRevenue: this.isRevenue.value,
      date: this.date.value
    };

    this.expenseService.addExpense(expense);
  }
}
