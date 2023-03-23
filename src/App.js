import React, { useState } from 'react';

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// This can also be written as arrow function
// const App = (props) => {}
const INITIAL_EXPENSES = [
  { title: "Baby car seat", amount: 150, date: new Date(2023, 2, 15), id: '101' },
  { title: "Apple watch", amount: 245, date: new Date(2023, 1, 6), id: '102' },
  { title: "Basketball shoes", amount: 265, date: new Date(2022, 4, 18), id: '103' },
  { title: "Classic suit", amount: 380, date: new Date(2022, 1, 10), id: '104' },
  { title: "Golf club set", amount: 550, date: new Date(2021, 8, 26), id: '105' },
  { title: "Pet turtle", amount: 32, date: new Date(2021, 0, 13), id: '106' },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's organize <br />
        monthly shopping expenses! 😙</h2>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
