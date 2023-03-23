import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    }

  return (
    <div className='expenses-container'>
      <ExpenseFilter onFilterChange={filterChangeHandler} selectedDefault={filteredYear} />
      <div className='expenses'>
        {props.items.map(expense => <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)}
      </div>
    </div>
 )
}

export default Expenses;
