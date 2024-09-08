import { Injectable } from '@angular/core';
import { ExpenseItem, ExpenseList } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class ExpenseListService {
  private positiveAmount: number = 0
  private negativeAmount: number = 0
  private totalAmount: number = 0

  private expenses: ExpenseList = [
    {
      id: 1,
      title: 'Groceries',
      type: 'expense',
      description: 'Groceries for the week',
      amount: 100,
      date: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Rent',
      type: 'expense',
      description: 'Rent for the month',
      amount: 500,
      date: new Date().toISOString()
    },
    {
      id: 3,
      title: 'Car payment',
      type: 'expense',
      description: 'Monthly car payment',
      amount: 200,
      date: new Date().toISOString()
    }
  ];

  get expenseList(): ExpenseList {
    return this.expenses;
  }

  get positive(): number {
    return this.positiveAmount;
  }

  get negative(): number {
    return this.negativeAmount;
  }

  get total(): number {
    return this.totalAmount;
  }

  addExpense(expense: ExpenseItem) {
    this.expenses.push(expense);
    this.totalAmount += expense.amount;
    if (expense.amount > 0) {
      this.positiveAmount += expense.amount;
    } else {
      this.negativeAmount += expense.amount;
    }
  }

}
