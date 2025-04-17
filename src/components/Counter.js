import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const isVisible = useSelector((state) => state.counter.toggleVisible);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseBy5Handler = () => {
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  console.log(counter);

  
  

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
