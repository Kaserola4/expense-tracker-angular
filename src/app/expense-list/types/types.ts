export type ExpenseType = 'income' | 'expense';

export type ExpenseItem = {
  id?: number,
  title: string,
  type: ExpenseType,
  description: string,
  amount: number,
  date: string
}

export type ExpenseList = Array<ExpenseItem>;
