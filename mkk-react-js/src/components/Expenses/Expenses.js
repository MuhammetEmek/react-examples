import React, {useState} from "react";
import Card from "../UI/Card/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css';

const Expenses=(props)=> {

    const[filteredYear, setFilteredYear] = useState('2021'); // Hooks

    const filterChanged = (value) => {
        debugger    
        setFilteredYear(value);        
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    } )

    return(
        <div>            
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter ={filterChanged}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    )
}

export default Expenses;