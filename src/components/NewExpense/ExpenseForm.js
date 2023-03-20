import React, { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  return (
    <form>
      <p className='form-title'>Add an expense item</p>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <input type="text" className='expense-form-input__title' placeholder="Expense item" onChange={titleChangeHandler} />
        </div>

        <div className="form-inline-input">
          <div className="new-expense__control">
            <input type="number" min="0.00" step="0.01" placeholder="Amount $" />
          </div>

          <div className="new-expense__control input-date">
            <input type="date" min="2021-01-01" max="2025-12-31" />
          </div>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
