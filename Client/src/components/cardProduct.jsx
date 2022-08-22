import React from 'react';
import CounterProduct from './counterProduct';
import ImageProduct from './imageProduct';
import ButtonProduct from './buttonProduct';
import '../styles/cardProduct.scss';

class CardProduct extends React.Component {
    render(){
        return(
            <div className="cardProduct">
                <ImageProduct img={this.props.img}/>
                <h2>{this.props.title}</h2>
                <h3>${this.props.price}</h3>
                <div className='containerOptions'>
                    <CounterProduct/>
                    <ButtonProduct title={"Añadir al carrito"}/>
                </div>
            </div>
        )
    }
}

export default CardProduct;
