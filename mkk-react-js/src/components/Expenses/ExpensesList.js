import ExpensesItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList=(props)=> {
    if(props.items.length === 0)
        return <h2 className="expenses-list__fallback">No Found Expenses !</h2>

    return(
        <ui className="expenses-list">
            {
                props.items.map((expense) => (
                    <ExpensesItem
                        key    = {expense.id}
                        date   = {expense.date}
                        title  = {expense.title}
                        amount = {expense.amount} />
                ))
            }            
        </ui>        
    )
}

export default ExpensesList;