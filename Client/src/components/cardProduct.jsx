import React from 'react';
import '../styles/cardProduct.scss';

class CardProduct extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0}
    }

    plusButton = async ()=>{
      await this.setState((state)=>({
        count : state.count + 1
      }))
    }

    restButton = async()=>{
      if (this.state.count >0) {
        await this.setState((state)=>({
          count: state.count - 1
        }))
      }
    }

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
                        <p id='restButton' onClick={this.restButton}>-</p>
                        <p>{this.state.count}</p>
                        <p id='plusButton' onClick={this.plusButton}>+</p>
                    </div>
                    <button>Añadir al carrito</button>
                </div>
            </acticle>
        )
    }
}

export default CardProduct;
