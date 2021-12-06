import {useSelector, useDispatch} from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {
     // useDispatch({type:"increment"})
     
  };
  const getCertainData = state => state.counter+1;
  const counter = useSelector(getCertainData);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
