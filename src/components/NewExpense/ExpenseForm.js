import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHalnder = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHalnder = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHalnder = (event) => {
        setDate(event.target.value);
    };

    const submitHander = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    };

    return (<form onSubmit={submitHander}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHalnder}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="text" value={amount} onChange={amountChangeHalnder}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHalnder}></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};

export default ExpenseForm;