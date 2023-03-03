import React, { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleExpense(event) {
    setTitle(event.target.value);
  }
  function handleAmount(event) {
    setAmount(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleExpense}
            placeholder="Enter expense"
           
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            onChange={handleAmount}
            min="0.01"
            
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-02-01"
            max="2-03-2023"
            onChange={handleDate}
           
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
