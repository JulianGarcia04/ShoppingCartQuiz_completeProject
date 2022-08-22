import React from "react";
import '../styles/imageProduct.scss';

const ImageProduct = (props)=>{
  return (
    <div className='containerImage'>
      <img src={props.img} alt="" />
    </div>
  )
}

export default ImageProduct;
