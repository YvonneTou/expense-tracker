import React from "react";
import './ExpenseFilterDropdown.css'

function expenseFilterDropdown() {
  return(
    <div>
      <select className='dropdown-year'>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
    </div>
  );
}

export default expenseFilterDropdown;
