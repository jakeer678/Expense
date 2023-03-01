import React from "react";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expense = [
    {
      id: 1,
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
      location: "Bengaluru",
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 100,
      date: new Date(2021, 2, 28),
      location: "pune",
    },
    {
      id: 3,
      title: "New Tv",
      amount: 50,
      date: new Date(2021, 2, 28),
      location: "Hyderbad",
    },
    {
      id: 4,
      title: "New Bike",
      amount: 60,
      date: new Date(2021, 2, 28),
      location: "Delhi",
    },
  ];

  return <div>{
    expense.map(item=>(
      <ExpenseItem key={item.id} id={item.id} title={item.title} amount={item.amount} date={item.date} location={item.location} />
    ))
  }</div>;
};

export default App;
