import React from 'react';
import iconSearch from '../assets/search.svg';
import person from '../assets/person.svg';
import shoppingCart from '../assets/shoppingCart.svg'
import '../styles/navbar.scss';


class NavBar extends React.Component {
    render(){
        return <nav className='navBar-component'>
            <div>
                <img src={iconSearch} alt="search" />
                <img src={shoppingCart} alt="shoppingCart" />
                <img src={person} alt="" />
            </div>
        </nav>
    }
}

export default NavBar;