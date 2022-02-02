import './ExpenseDate.css';

const ExpensesDate=(props)=> {
    const date  = new Date(props.date)
    const month = date.getMonth();
    const day   = date.getDate();
    const year  = date.getFullYear()

    return(
        <div className="expense-date">            
            <div className="expense-date_day">{day}</div>
            <div className="expense-date_month">{month}</div>            
            <div className="expense-date_year">{year}</div>
        </div>
    )
}

export default ExpensesDate;