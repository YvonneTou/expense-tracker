import React from 'react';

import ExpenseFilterDropdown from './ExpenseFilterDropdown';
import './ExpenseFilter.css'

function expenseFilter() {
  return(
    <div>
      <div className="filter-title">
        <p>Filter by year</p>
        <ExpenseFilterDropdown />
      </div>

    </div>
  );
}

export default expenseFilter;
