import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";


const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items?.map((item) => (
        <ExpenseItem
          key={item?.id}
          id={item?.id}
          title={item?.title}
          amount={item?.amount}
          date={item?.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
