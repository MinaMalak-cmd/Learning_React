import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (prop) => {
  const expenses = prop.data;
  const [newEx,setNewEx] = useState([]);
  const handleChangeParent = (year) => {
     setNewEx(expenses.filter(el => 
       el.date.getFullYear()==parseInt(year) 
      ))
      // to send data from Expenses to App.js
      prop.onChangeG(year)
  };
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChange={handleChangeParent} />
        {/* {newEx && newEx.map(ex =>(
         <ExpenseItem title={ex.title} amount={ex.amount} date={ex.date} key={ex.id} />     
        ))} */}
        {expenses.map((ex) => (
          <ExpenseItem title={ex.title} amount={ex.amount} date={ex.date} key={ex.id} />
        )) }     
      </Card>
    </div>
  );
};

export default Expenses;
