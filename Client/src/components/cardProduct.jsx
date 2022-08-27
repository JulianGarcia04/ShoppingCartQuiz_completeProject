import React from 'react';
import CounterProduct from './counterProduct';
import ImageProduct from './imageProduct';
import ButtonProduct from './buttonProduct';
import '../styles/cardProduct.scss';

const CardProduct = (props)=>{

  return(
      <div className="cardProduct" onClick={props.methods}>
          <ImageProduct img={props.img}/>
          <h2>{props.title}</h2>
          <h3>${props.price}</h3>
          <div className='containerOptions'>
              <CounterProduct cant={props.cant}/>
              <ButtonProduct title={"Añadir al carrito"}/>
          </div>
      </div>
  )
}

export default CardProduct;
