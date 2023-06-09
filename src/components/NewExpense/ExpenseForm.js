import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formDisplay, setFormDisplay] = useState("component-hide");
  const [addButtonDisplay, setAddButtonDisplay] = useState("component-show");

  // Alternative approach of using only 1 useState
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const formShowHandler = () => {
    setFormDisplay("component-show");
    setAddButtonDisplay("component-hide");
  };

  const formHideHandler = () => {
    setFormDisplay("component-hide");
    setAddButtonDisplay("component-show");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    formHideHandler();
  };

  return (
    <div className='new-expense card'>
      <button onClick={formShowHandler} className={addButtonDisplay}>Click here to add a new expense</button>

      <form onSubmit={submitHandler} className={formDisplay}>
        <p className="form-title">Add an expense item</p>
        <div className="new-expense__controls">
          <div className="new-expense__control input-title">
            <input
              type="text"
              value={enteredTitle}
              className="expense-form-input__title"
              placeholder="Expense item"
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control input-amount">
            <input
              type="number"
              value={enteredAmount}
              className="expense-form-input__amount"
              min="0.00"
              step="0.01"
              placeholder="Amount $"
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control input-date">
            <input
              type="date"
              value={enteredDate}
              className="expense-form-input__date"
              min="2021-01-01"
              max="2025-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={formHideHandler} className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
