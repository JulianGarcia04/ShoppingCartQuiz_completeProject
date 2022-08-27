import React, {useState} from "react";
import Swal from 'sweetalert2';
import '../styles/counterProduct.scss'

const CounterProduct = (props)=>{

  const [count, setCount] = useState(0);


  const plusButton = (ev)=>{
    if(count < props.cant){
      setCount(count+1);
    }else{
      Swal.fire({
        title: 'Error',
        text: 'No hay más productos en el inventario',
        icon: 'error'
      })
    }
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
