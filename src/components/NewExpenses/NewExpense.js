import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = ({onSubmit}) => {
    const HandleSavingExpense = (newData) =>{
       const expenseData = { ...newData,id:Math.random().toString()};
       console.log(expenseData);
       onSubmit(expenseData);
    }
    return ( 
        <div className='new-expense'>
            <ExpenseForm onSaveData={HandleSavingExpense}/>
        </div>
     );
}
 
export default NewExpense;