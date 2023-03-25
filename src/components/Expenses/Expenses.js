import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    }

  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
    });
  if (filteredYear === 'All') {filteredExpenses = props.items;}

  // Outputting conditional content
  // Add a if statement in && in the return statement could work too
  // filteredExpenses.length === 0 && <p>message</p>
  // However, this seems to be a cleaner way to handle this case
  let expensesDisplay = <p>No expenses found in this year.</p>;
  if (filteredExpenses.length > 0) {
    expensesDisplay = filteredExpenses.map(expense =>    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />);
  }
  return (
    <div className='expenses-container'>
      <ExpenseFilter onFilterChange={filterChangeHandler} selectedDefault={filteredYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <div className='expenses'>
        {expensesDisplay}
      </div>
    </div>
 )
}

export default Expenses;
