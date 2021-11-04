import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";

function ExpenseItem(props) {
    
    return (
        <li>
        <Card className="expense-item">
        <div>
            <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price" type="number" min="0.1" max="99999">${props.amount}</div>
        </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;