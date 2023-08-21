import {  useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();  //REDUX STEP = 9 (creating a dispatch using useDispatch HOOK to dispatch actions)
  const counter = useSelector(state => state.counter);  //REDUX STEP = 7(here using useSelector hook we accessing,assigning the counter value to this counter variable )
  const show = useSelector(state => state.showCounter);

 const incrementHandler = () => {
  dispatch({type: 'increment'})   //REDUX STEP = 11 (using Dispatch function that will take a object with type parameter)
 };

 const decrementHandler = () => {
  dispatch({type: 'decrement'})
 };

 const increaseHandler = () => {
  dispatch({type : 'increase', amount: 5});    //that second parameter is called PAYLOAD using that sending the value to our reducer to work with
 }


  const toggleCounterHandler = () => {
    dispatch({type : 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}  {/**REDUX STEP = 8 (rendering the counter value on the page)  */}
      <div>
      <button onClick={incrementHandler}>Increment</button> {/**REDUX STEP = 10 creating buttons  */}
      <button onClick={increaseHandler}>Increment by 5</button>
      <button onClick={decrementHandler}>Decrement</button> {/**REDUX STEP = 12 (point this buttons to the functions created [THAT'S IT])  */}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
