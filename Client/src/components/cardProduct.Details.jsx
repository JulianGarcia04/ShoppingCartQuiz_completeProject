import React from "react";
import ImageProduct from "./imageProduct";
import CounterProduct from "./counterProduct";
import ButtonProduct from "./buttonProduct";
import '../styles/cardProduct.Details.scss';

const CardProductDetails = (props)=>{
  return (
    <div className="containerDetails">
      <ImageProduct img={props.imgUrl}/>
      <div className="containerInfo">
        <h1>
          Sal De Frutas Lua Plus
          Polvo Citrus Caja Con 6
          Sobres
        </h1>
        <div className="optionsContainer">
          <h1>16.150</h1>
          <ButtonProduct title={"Comprar ahora"}/>
          <CounterProduct/>
          <ButtonProduct title={"Añadir al carrito"}/>
        </div>
        <h2>
          ES UN MEDICAMENTO. NO EXCEDER SU
          CONSUMO. LEER INDICACIONES Y
          CONTRAINDICACIONES. SI LOS SÍNTOMAS
          PERSISTEN, CONSULTAR AL MÉDICO.
        </h2>
        <p>Caja Con 6 Sobres</p>
        <p>Via de administración: Oral</p>
      </div>
    </div>
  )
}

export default CardProductDetails;
