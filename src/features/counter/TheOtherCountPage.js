import React from 'react'
import { useSelector } from 'react-redux';

function TheOtherCountPage() {
const count = useSelector(state => state.counter.value);
  return (
    <div>
        <span>değeri burada da göster :{count}</span>
    </div>
  )
}

export default TheOtherCountPage;