// import logo from './logo.svg';
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

// This can also be written as arrow function
// const App = (props) => {}
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 150, date: new Date(2023, 2, 5) },
    { title: "Grocery Shopping", amount: 45, date: new Date(2023, 2, 6) },
    { title: "Dinner with team", amount: 50, date: new Date(2023, 2, 10) },
    { title: "Cosmetic eyeliner", amount: 32, date: new Date(2023, 2, 13) },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's organize monthly expenses! 😙</h2>
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
