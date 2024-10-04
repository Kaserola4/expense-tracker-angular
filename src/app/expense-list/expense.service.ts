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
      isRevenue: false,
      description: 'Groceries for the week',
      amount: 100,
      date: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Rent',
      isRevenue: false,
      description: 'Rent for the month',
      amount: 500,
      date: new Date().toISOString()
    },
    {
      id: 3,
      title: 'Car payment',
      isRevenue: false,
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
    const id = this.expenses.length + 1;
    this.expenses.push({ ...expense, id });

    if (expense.isRevenue) {
      console.log('revenue');
      this.positiveAmount += expense.amount;
    } else {
      console.log('expense');
      this.negativeAmount += expense.amount;
    }

    this.totalAmount = this.positiveAmount - this.negativeAmount;
  }
}
