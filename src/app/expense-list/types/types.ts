export type ExpenseType = 'income' | 'expense';

export type ExpenseItem = {
  id?: number,
  title: string,
  isRevenue: boolean,
  description: string,
  amount: number,
  date: string
}

export type ExpenseList = Array<ExpenseItem>;
