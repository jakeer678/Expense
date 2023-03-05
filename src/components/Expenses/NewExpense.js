import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";



const NewExpense = (props) => {
  const saveExpenseDataHandle = (enterExpensedata) => {
    const expenseData = {
      ...enterExpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };





  return (
    <div className="newExpense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} />
    </div>
  );
};

export default NewExpense;
