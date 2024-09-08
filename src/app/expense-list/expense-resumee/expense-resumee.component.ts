import { Component } from '@angular/core';
import { ExpenseListService } from '../expense.service';

@Component({
  selector: 'expense-resumee',
  standalone: true,
  imports: [],
  templateUrl: './expense-resumee.component.html',
  styleUrl: './expense-resumee.component.css'
})
export class ExpenseResumeeComponent {
  constructor(private expenseService: ExpenseListService) {}

  get positive(): number {
    return this.expenseService.positive;
  }

  get negative(): number {
    return this.expenseService.negative;
  }

  get total(): number {
    return this.expenseService.total;
  }

}
