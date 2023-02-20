import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';


function Counter() {

const count = useSelector(state => state.counter.value);
const dispatch = useDispatch();
  return (
    <div>
        <div>
            <button onClick={()=>dispatch(increment())}>Arttır</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(decrement())}>Azalt</button>
        </div>
    </div>
  )
}

export default Counter;