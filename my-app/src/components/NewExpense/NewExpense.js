import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [render, setRender] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setRender(false);
  };

  const isEditing = () => {
    setRender(true);
  };
  const stopEditing = () => {
    setRender(false);
  };

  return (
    <div className="new-expense">
      {!render && <button onClick={isEditing}>Add New Expense</button>}
      {render && (
        <ExpenseForm
          onCancel={stopEditing}
          onSaveExpenseData={saveExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
