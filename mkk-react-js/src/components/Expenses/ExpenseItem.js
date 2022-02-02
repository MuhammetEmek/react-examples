import React from "react"
import Card from "../UI/Card/Card";
import ExpensesDate from "./ExpenseDate";

import './ExpenseItem.css'

const ExpensesItem=(props)=> {
    return(
        <li>
            <Card className= "expense-item">
                <ExpensesDate date = {props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className = "expense-item__price">{props.amount}</div>
                </div>

            </Card>
        </li>        
    )
}

export default ExpensesItem;