import React from "react";
import '../styles/buttonProduct.scss';

const ButtonProduct = (props)=>{
  return (
    <button className="buttonProduct" onClick={props.method}>{props.title}</button>
  )
}

export default ButtonProduct;
