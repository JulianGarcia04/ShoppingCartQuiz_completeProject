import React from 'react';
import iconSearch from '../assets/search.svg';
import person from '../assets/person.svg';
import shoppingCart from '../assets/shoppingCart.svg'
import '../styles/navbar.scss';


const NavBar = (props)=>  {
  return <nav className='navBar-component'>
      <div>
          <img src={iconSearch} alt="search" />
          <img src={shoppingCart} alt="shoppingCart" onClick={props.methods}/>
          <img src={person} alt="" />
      </div>
  </nav>
}

export default NavBar;
