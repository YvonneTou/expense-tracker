// import logo from './logo.svg';
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// This can also be written as arrow function
// const App = (props) => {}
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 150, date: new Date(2023, 2, 5) },
    { title: "Grocery Shopping", amount: 45, date: new Date(2023, 2, 6) },
    { title: "Dinner with team", amount: 50, date: new Date(2023, 2, 10) },
    { title: "Cosmetic eyeliner", amount: 32, date: new Date(2023, 2, 13) },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense);
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
