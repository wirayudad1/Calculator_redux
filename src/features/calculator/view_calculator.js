import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  operation,
  calculationByAmount,
  reset,
  selectCount,
  operator,
  cal_display
} from './calc_controller';
import styles from './design.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const calc_display = useSelector(cal_display);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <input type="text" className= {styles.lcd} value={calc_display}  />
      </div>
      <div className={styles.row}>
        <input type="text" className= {styles.lcd} value={count}  />
      </div>
      <div className={styles.row}>
       
        <button
          className={styles.button}
          onClick={() => dispatch(calculationByAmount({
            number:1,
            operation:operator,
          }))}              >
          1
        </button>
        <button
          className={styles.asyncButton}
          onClick={(button) => dispatch(calculationByAmount({
            number:2,
            operation:operator,
          }))}              >
          2
        </button>
        <button
          className={styles.button}
          onClick={(button) => dispatch(calculationByAmount({
            number:3,
            operation:operator
          }))}              >
          3
        </button>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(operation('-'))}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(calculationByAmount({
            number:4,
            operation:operator
          }))}
        >
          4
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:5,
            operation:operator
          }))}        >
          5
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(calculationByAmount({
            number:6,
            operation:operator
          }))}      
        >
          6
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(operation('+'))}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(calculationByAmount({
            number:7,
            operation:operator
          }))}
        >
          7
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:8,
            operation:operator
          }))}        >
          8
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(calculationByAmount({
            number:9,
            operation:operator
          }))}      
        >
          9
        </button>
        <button
          className={styles.button}
          onClick={() =>  dispatch(reset())}      
        >
          C
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(operation('/'))}
        >
          /
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:0,
            operation:operator
          }))}        >
          0
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(operation('x'))}
        >
          X
        </button>
      </div>
    </div>
  );
}
