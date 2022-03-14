import React from 'react';
import ExpenseItem from './Expenses/ExpenseItem';
import  './ExpensesList.css'

const ExpensesList = (props) => {
     let FilterText = (
       <h1 className="expenses-list__fallback">no expense for the said year</h1>
     )

     if (props.items.length > 0) {
       FilterText = props.items.map((expense) => {
           return (
             <ul className="expenses-list">
               <ExpenseItem
                 key={expense.id}
                 title={expense.title}
                 amount={expense.amount}
                 date={expense.date}
               />
             </ul>
           )
       })
     }
  return <div>{FilterText}</div>;
};

export default ExpensesList;
