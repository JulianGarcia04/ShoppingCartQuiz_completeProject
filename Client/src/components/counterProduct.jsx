import React, {useState} from "react";
import '../styles/counterProduct.scss'

const CounterProduct = ()=>{

  const [count, setCount] = useState(0);

  const plusButton = async ()=>{
    await setCount(count+1);
  }

  const restButton = async()=>{
    if (count >0) {
      await setCount(count - 1);
    }
  }

  return(
    <div className="containerCounter">
      <p id='restButton' onClick={restButton}>-</p>
      <p>{count}</p>
      <p id='plusButton' onClick={plusButton}>+</p>
    </div>
  )
}

export default CounterProduct;
