import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <ul className="expense-list">
      {props.items.length === 0 && (
        <h2 className="expense-list_fallback">No expenses found !</h2>
      )}
      {props.items.length > 0 &&
        props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      {props.items.length === 1 && (
        <h3 className="expense-list_fallback_one">
          "Only single Expense here. Please add more..."
        </h3>
      )}
    </ul>
  );
};

export default ExpenseList;
