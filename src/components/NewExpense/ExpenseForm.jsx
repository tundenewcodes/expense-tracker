import React, {useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleHandler = (e) => {
    setTitle(e.target.value)
    
  }
  const amountHandler = (e) => {
    setAmount(e.target.value)
    
  }
  const dateHandler = (e) => {
    setDate(e.target.value)
    
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: title,
      amount : amount,
      date : new Date(date)
    }
     setDate('')
    setAmount('')
      setTitle('')
   props.onSaveExpenseData(expenseData)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> title </label> <input type="text" onChange={titleHandler}  value={title} />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  )
}

export default ExpenseForm
