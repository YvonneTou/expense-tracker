import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense() {
  return (
    <div className='new-expense card'>
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
