import React from "react";
import ButtonProduct from "./buttonProduct";
import '../styles/modal.shoppingCart.scss';

const ModalShoppingCart = (props)=>{

  const styles = {
    button: {
      width: '10.375em',
      height: '1.8625em',
      margin: '0px 0.625em'
    },
    buttonHover: {
      backgroundColor: 'white',
      border: '1px solid #009244',
      color: '#009244'
    }
  }
  return (
    <div className="background-container" onClick={props.methods}>
      <div className="modal-container">
        <h1 className="title">Producto añadido correctamente a su carrito de compras</h1>
        <div className="product-container">

        </div>
        <div className="info-container">
          <p>Resumen de tu carrito</p>
          <div>
            <p>SubTotal</p>
            <p>$16.150</p>
          </div>
          <div>
            <p>Transporte</p>
            <p>Sin Costo</p>
          </div>
          <div>
            <p>IVA</p>
            <p>Incluido</p>
          </div>
          <div>
            <p>Total</p>
            <p>$16.150</p>
          </div>
          <div>
            <p>Incluido IVA</p>
            <p>$0</p>
          </div>
        </div>
        <div className="buttons-container">
          <ButtonProduct title={"Ver más productos"} style={{...styles.button, ...styles.buttonHover}}/>
          <ButtonProduct title={"Pagar"} style={styles.button}/>
        </div>
      </div>
    </div>
  )
}

export default ModalShoppingCart;
