import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2020");

  const filerChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filerChangeHandler}
          ></ExpensesFilter>
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
          <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
  );
}

export default Expenses;
