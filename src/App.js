import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
  return (
    <div>
      <Expenses items={Expenses} />
    </div>
  );
};

export default App;
