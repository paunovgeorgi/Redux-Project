import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const isVisible = useSelector(state => state.toggleVisible);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }

  const increaseBy5Handler = () => {
    dispatch({ type: 'increase', amount: 8})
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { isVisible && <div className={classes.value}>{counter}</div> }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
