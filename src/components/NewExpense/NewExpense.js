import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString()
    };
    props.onAddExpense(expenseData);
  }

  return (
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  );
}

export default NewExpense;
