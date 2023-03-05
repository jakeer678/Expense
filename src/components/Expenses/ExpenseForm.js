import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
  const [show, setShow] = useState(true);

  function handleExpense(event) {
    setEnterTitle(event.target.value);
  }
  function handleAmount(event) {
    setEnterAmount(event.target.value);
  }

  function handleDate(event) {
    setEnterDate(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  }

  return (
    <>
      {show ? (
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
              <button onClick={() => setShow(false)} type="submit">
                cancel
              </button>
            </div>
            <div className="new-expense_actions">
              <button onClick={() => setShow(false)} type="submit">
                Add new Expense
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="new-expense_controls_tog">
          <div className="new-expense_actions">
            <button onClick={() => setShow(true)} type="submit">
              Add new Expense
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpenseForm;
