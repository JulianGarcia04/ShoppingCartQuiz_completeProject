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
                <img src={this.props.img} alt="" />
                <h2>{this.props.title}</h2>
                <h3>{this.props.price}</h3>
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
