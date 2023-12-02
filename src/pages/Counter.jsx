import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../feature/counter';

function Counter() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
}

export default Counter;
