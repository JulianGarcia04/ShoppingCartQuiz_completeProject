import React from "react";
import '../styles/imageProduct.scss';

const ImageProduct = (props)=>{
  return (
    <div className='containerImage' style={props.style}>
      <img src={props.img} alt="" />
    </div>
  )
}

export default ImageProduct;
