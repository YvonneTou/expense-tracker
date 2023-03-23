import React from 'react';

// import ExpenseFilterDropdown from './ExpenseFilterDropdown';
import './ExpenseFilter.css'

function expenseFilter(props) {
  const yearChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  }

  return(
    <div>
      <div className="filter-title">
        <p>Filter by year</p>
        <select className='dropdown-year' onChange={yearChangeHandler} value={props.selectedDefault}>
          <option value='All'>All</option>
          {/* <option value='2025'>2025</option> */}
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>

    </div>
  );
}

export default expenseFilter;
