import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropDwonHnadle = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter_control">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={dropDwonHnadle}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
