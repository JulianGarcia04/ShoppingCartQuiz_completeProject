import React from 'react';
import '../styles/cardProduct.scss';

class CardProduct extends React.Component {
    render(){
        return(
            <acticle className="cardProduct">
                <img src="https://locatelcolombia.vtexassets.com/arquivos/ids/227934/7702057700119_1_VITAMINA-C-MK-SABOR-NARANJA-X-500MG-X-100-TABLETAS-MASTICABLES.jpg?v=637292328675600000" alt="" />
                <h2>Vitamina C Caja Con 10 Tiras
                    De Tabletas Masticables C/U
                    - Sabor Mandarina  </h2>
                <h3>$49,400</h3>
                <div className='containerOptions'>
                    <div>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                    <button>Añadir al carrito</button>
                </div>
            </acticle>
        )
    }
}

export default CardProduct;