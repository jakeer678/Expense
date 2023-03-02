import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses items={Expenses} />
    </div>
  );
};

export default App;
