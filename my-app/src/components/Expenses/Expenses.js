import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [addFilterExpense, setAddFilterExpense] = useState("2021");

  const saveFilter = (selectedFilter) => {
    setAddFilterExpense(selectedFilter);
  };

  const filteredItem = props.items.filter(
    (filtered) => filtered.date.getFullYear().toString() === addFilterExpense
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={addFilterExpense}
          onSelectFilter={saveFilter}
        />
        <ExpensesChart expenses={filteredItem} />
        <ExpensesList items={filteredItem} />
      </Card>
    </div>
  );
};
export default Expenses;
