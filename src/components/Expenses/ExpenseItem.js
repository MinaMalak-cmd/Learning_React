import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, {useState} from 'react';
function ExpenseItem(props) {
  // let title = props.title;
  const [title,setTitle] =useState(props.title);
  const HandleClick = (e) =>{
    // console.log(e)
    setTitle("updated");
    // console.log(title);
  }
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={HandleClick}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
