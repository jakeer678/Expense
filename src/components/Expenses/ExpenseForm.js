import React from "react";

const ExpenseForm = () => {
  function handleExpense(event) {
    console.log(event.target.value);
  }
  function handleAmount(event) {
    console.log(event.target.value);
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
            placeholder="Enter Amount"
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
