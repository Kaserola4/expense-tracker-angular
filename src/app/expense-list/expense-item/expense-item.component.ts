import { Component, Input } from '@angular/core';
import { ExpenseItem } from '../types/types';

@Component({
  selector: 'expense-list-item',
  standalone: true,
  imports: [],
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css'
})
export class ExpenseItemComponent {
  @Input() expense!: ExpenseItem;

  onEditExpense(expense: ExpenseItem) {
    console.log(expense);
  }
}
