import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import categories from "./categories";

const ExpenseTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "abc",
      amount: 10,
      category: "Grocery",
    },
    {
      id: 2,
      description: "def",
      amount: 20,
      category: "Fuel",
    },
    {
      id: 3,
      description: "ghi",
      amount: 15,
      category: "Bills",
    },
  ]);

  const expensesFilteredByCategory = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <>
      <h1 className="text-center">Expense Tracker</h1>
      <ExpenseForm
        categories={categories}
        onSubmit={(formData) => {
          setExpenses([...expenses, formData]);
        }}
      />
      <ExpenseFilter categories={expenses.map((expense) => expense.category)} onSelectCategory={(selectedCategory) => setSelectedCategory(selectedCategory)} />
      <ExpensesList
        expenses={expensesFilteredByCategory}
        onDeleteExpense={(id) => setExpenses(expenses.filter(expense => expense.id !== id))}
      />
    </>
  );
};

export default ExpenseTracker;
