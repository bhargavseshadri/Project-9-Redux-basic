import {  useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/index';  //REDUX TOOLKIT STEP =  9 importing what we exported


const Counter = () => {
  const dispatch = useDispatch();  
  const counter = useSelector(state => state.counter.counter); 
  const show = useSelector(state => state.counter.showCounter);

 const incrementHandler = () => {
  dispatch(counterActions.increment());    //REDUX TOOLKIT STEP =  10 (in this way we access the method we reqd ) (THAT'S IT )
 };

 const decrementHandler = () => {
  dispatch(counterActions.decrement);
 };

 const increaseHandler = () => {
  dispatch(counterActions.increase(10));   
 }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}  
      <div>
      <button onClick={incrementHandler}>Increment</button> 
      <button onClick={increaseHandler}>Increment by 5</button>
      <button onClick={decrementHandler}>Decrement</button> 
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
