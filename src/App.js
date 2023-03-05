import React, { useState } from "react";
import expense from "./components/Expenses/IntialState";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState(expense);

  const addExpenseHandle = (addexpens) => {
    setExpenses((preveExpense) => {
      return [addexpens, ...preveExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandle} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
