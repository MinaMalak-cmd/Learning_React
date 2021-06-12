import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = ({onSaveData}) => {
  // const [title,setTitle] = useState('');
  // const [amount,setAmount] = useState('');
  // const [date,setDate] = useState('');
  const [input,setInput] = useState({
    title:'',
    amount:'',
    date:''
  })
  const handleTitleChange = e =>{   
    // setTitle(e.target.value)
    // setInput({
    //   ...input,
    //   title:e.target.value
    // })
    setInput((prevState)=>{
      return{...prevState,title:e.target.value}
    })
  }
  const handleAmountChange = e =>{
    // setAmount(e.target.value)
    // setInput({
    //   ...input,
    //   amount:e.target.value
    // })
    setInput(prevState =>{
      return{...prevState,amount:e.target.value}
    })
  }
  const handleDateChange = e =>{
    // setDate(e.target.value)
    // setInput({
    //   ...input,
    //   date:e.target.value
    // })
    setInput((prevState) =>{
      return{ ...prevState, date:e.target.value }
    })
  } 
  let newExpense = {};
  const handleSubmitData = (e) =>{
    e.preventDefault();
    newExpense={
      title:input.title,
      amount:input.amount,
      date:new Date(input.date)
    }
    console.log(newExpense);
    onSaveData(newExpense)
    setInput({title:'',
    amount:'',
    date:''});
  }
  return (
    <form onSubmit={handleSubmitData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text" 
          value={input.title} 
          onChange={handleTitleChange} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
          type="number" 
          step="0.1" 
          min="0.1" 
          onChange={handleAmountChange}
          value={input.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
          type="date" 
          min="2019-12-11" 
          max="2022-12-11"
          onChange={handleDateChange} 
          value={input.date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
