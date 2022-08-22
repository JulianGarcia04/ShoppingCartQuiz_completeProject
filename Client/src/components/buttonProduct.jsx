import React from "react";
import '../styles/buttonProduct.scss';

const ButtonProduct = (props)=>{
  return (
    <button className="buttonProduct" onClick={props.method} style={props.style}>{props.title}</button>
  )
}

export default ButtonProduct;
