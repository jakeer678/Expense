import React, { useState } from "react";

const ExpenseDetail = (props) => {
  const [expense, setExpense] = useState(props.amount);

  function updateExepense() {
    setExpense(100);
  }

  return (
    <div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${expense}</div>
        <div onClick={updateExepense} className="update">
          update
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetail;
