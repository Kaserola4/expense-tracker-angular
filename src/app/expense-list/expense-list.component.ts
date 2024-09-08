import { Component } from '@angular/core';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { ExpenseListService } from './expense.service';
import { ExpenseResumeeComponent } from './expense-resumee/expense-resumee.component';

@Component({
  selector: 'expense-list',
  standalone: true,
  imports: [ExpenseItemComponent, ExpenseResumeeComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css',
})
export class ExpenseListComponent {
  constructor(private expenseService: ExpenseListService) {}

  get expenses() {
    return this.expenseService.expenseList;
  }
}
