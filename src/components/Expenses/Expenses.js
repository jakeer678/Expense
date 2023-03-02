import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expense = [
    {
      id: 1,
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 100,
      date: new Date(2021, 2, 28),
    },
    {
      id: 3,
      title: "New Tv",
      amount: 50,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: "New Bike",
      amount: 60,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <Card className="expenses">
      {expense.map((item) => (
        <ExpenseItem
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
