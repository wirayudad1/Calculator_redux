import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  operation,
  calculationByAmount,
  reset,
  selectCount,
  operator,
  lastInput,
  coma,
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
        <input type="text" className= {styles.lcdresult}  value={count}  />
      </div>
      <div className={styles.row}>
       
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:1,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,
          }))}              >
          1
        </button>
        <button
          className={styles.asyncButton}
          onClick={(button) => dispatch(calculationByAmount({
            number:2,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,
          }))}              >
          2
        </button>
        <button
          className={styles.asyncButton}
          onClick={(button) => dispatch(calculationByAmount({
            number:3,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,
          }))}              >
          3
        </button>
        <button
          className={styles.asyncButton}
          aria-label="Decrement value"
          onClick={() => dispatch(operation({
            operation:'-',
            koma:null
        }))}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:4,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,
          }))}
        >
          4
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:5,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,
          }))}        >
          5
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:6,
            operation:operator,
            koma:coma
          }))}      
        >
          6
        </button>
        <button
          className={styles.asyncButton}
          aria-label="Increment value"
          onClick={() => dispatch(operation({
            operation:'+',
            koma:null
        }))}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:7,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,

          }))}
        >
          7
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:8,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,
          }))}        >
          8
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:9,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,
          }))}      
        >
          9
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>  dispatch(reset())}      
        >
          C
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(operation({
            operation:'/',
            koma:null
        }))}
        >
          /
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(calculationByAmount({
            number:0,
            operation:operator,
            koma:coma,
            lastNumber:lastInput,
          }))}        >
          0
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(operation({
            operation:'x',
            koma:null
        }))}
        >
          X
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(operation({
              operation:operator,
              koma:'.'
          }))}
        >
          ,
        </button>
      </div>
    </div>
  );
}
