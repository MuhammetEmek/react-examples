import Card from "../UI/Card/Card";
import ExpensesList from "./ExpensesList";

import './Expenses.css';

const Expenses=(props)=> {
    return(
        <div>            
            <Card className="expenses">
                <ExpensesList items={props.items}></ExpensesList>
            </Card>
        </div>
    )
}

export default Expenses;