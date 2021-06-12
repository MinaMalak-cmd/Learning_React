import React, { useState } from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({onChange}) => {
   const [year,setYear] = useState('')

   //this function triggered when there's change in select input
   //inside it, it sends value changed to parent {expenses.js} using onChange which is a callback fun
   //sent from expenses into ExpenseFilter
    const handleChange = e =>{
        // console.log(e.target.value) //right
        setYear(e.target.value);
        onChange(e.target.value);
        //when i use onChange(year) it gives me old value
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={handleChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;