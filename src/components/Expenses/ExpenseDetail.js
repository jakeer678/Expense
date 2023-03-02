import React from "react";

const ExpenseDetail = (props) => {
  function deleteExepense() {
    const deleteExpense = document.getElementById("titleExpense");
    deleteExpense.remove();
  }

  return (
    <div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div id="titleExpense" className="expense-item_price">
          ${props.amount}
        </div>
        <div onClick={deleteExepense} className="delete">
          Delete
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetail;
