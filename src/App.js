import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
  const addExpenseHandle = (expenses) => {
    console.log("App.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandle} />
      <Expenses items={Expenses} />
    </div>
  );
};

export default App;
