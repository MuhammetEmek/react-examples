import ExpenseForm from "./ExpenseForm";

import React, { useState } from "react";

import './NewExpense.css'

const NewExpense = (props) => {

    const [isEdit, setIsEdit] = useState(false);


    const saveExpenseDataHandler = (expense) => {

        const expenseData = {
            ...expense,
            id: Math.random().toString(),
        }

        props.addOnExpense(expenseData);
        setIsEdit(false);

    }

    const startEditingHandler = () => {

        setIsEdit(true);
    }

    const stopEditinHandler = () => {
        setIsEdit(false);
    }

    return (
        <div className="new-expense">

            {!isEdit && (
                <button onClick={startEditingHandler}>Add NeW Expense</button>
            )}
            {isEdit && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditinHandler} />
            )}

        </div>
    )
}

export default NewExpense;