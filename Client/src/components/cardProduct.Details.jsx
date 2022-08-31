import React, {useEffect, useState} from "react";
import ImageProduct from "./imageProduct";
import CounterProduct from "./counterProduct";
import ButtonProduct from "./buttonProduct";
import {useParams} from 'react-router-dom';
import { getOneData } from "../services/services.oneProduct";
import '../styles/cardProduct.Details.scss';

const CardProductDetails = (props)=>{
  const styles= {
    containerImage: {
      width: "50%",
      boxShadow: '0.625em 0.3125em 0.3125em #666',
      border: '1px solid #eee'
    },
    button: {
      width: '9.375em'
    }
  }
  let {key} = useParams();

  let [data, setData] = useState([]);

  useEffect(()=>{
    getOneData(key).then(res=>setData(res));
  }, [key]);

  let price = new Intl.NumberFormat('es-ES').format(data.precioUnid);


  return (
    <div className="containerDetails">
      <ImageProduct img={data.image} style={styles.containerImage}/>
      <div className="containerInfo">
        <h1>
          {data.nombre}
        </h1>
        <div className="optionsContainer">
          <h1>${price}</h1>
          <ButtonProduct title={"Comprar ahora"} style={styles.button}/>
          <CounterProduct cant={data.cantidad}/>
          <ButtonProduct title={"Añadir al carrito"} style={styles.button}/>
        </div>
        <h2>
          {data.description}
        </h2>
        <p>Cantidad por caja: {data.cantidadCaja} {data.presentacion}</p>
        <p>Via de administración: {data.tipoConsumo}</p>
      </div>
    </div>
  )
}

export default CardProductDetails;
