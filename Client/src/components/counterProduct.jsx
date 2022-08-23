import React, {useState} from "react";
import '../styles/counterProduct.scss'

const CounterProduct = ()=>{

  const [count, setCount] = useState(0);

  const plusButton = (ev)=>{
    setCount(count+1);
    ev.stopPropagation();
  }

  const restButton = (ev)=>{
    if (count >0) {
      setCount(count - 1);
    }
    ev.stopPropagation();
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
