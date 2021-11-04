import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const showAddNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelExpenseFormHandler = () => {
    setIsEditing(false);
  }

  if (isEditing === false) {
    return (
      <div className="new-expense">
        <button onClick={showAddNewExpenseHandler}>Add new Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseFormHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
