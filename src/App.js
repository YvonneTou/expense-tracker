import React, { useState } from 'react';

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// This can also be written as arrow function
// const App = (props) => {}
const INITIAL_EXPENSES = [
  { title: "Car Insurance", amount: 150, date: new Date(2023, 2, 15) },
  { title: "Grocery Shopping", amount: 45, date: new Date(2023, 2, 6) },
  { title: "Dinner with team", amount: 50, date: new Date(2023, 1, 10) },
  { title: "Pet turtle", amount: 32, date: new Date(2023, 0, 13) },
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
