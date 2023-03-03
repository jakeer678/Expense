import React, { useState } from "react";

const ExpenseForm = () => {
  const [enterTitle, setTitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  function handleExpense(event) {
    setTitle(event.target.value);
  }
  function handleAmount(event) {
    setAmount(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    console.log(expenseData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleExpense}
            placeholder="Enter expense"
            value={enterTitle}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            onChange={handleAmount}
            min=""
            value={enterAmount}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-02-01"
            max="2-03-2023"
            onChange={handleDate}
            value={enterDate}
          />
        </div>
        <div className="new-expense_actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
