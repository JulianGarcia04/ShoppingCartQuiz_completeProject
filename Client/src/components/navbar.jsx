import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconSearch from '../assets/search.svg';
import person from '../assets/person.svg';
import shoppingCart from '../assets/shoppingCart.svg'
import logo from '../assets/logo-project.svg';
import '../styles/navbar.scss';


const NavBar = (props)=>  {

  let navigate = useNavigate();
  let prevComponent = props.oldComponent;

  const backToHome = ()=>{
    prevComponent.style.display = 'grid';
    navigate('/', {replace:true})
  }

  return <nav className='navBar-component'>
    <div className='image'>
      <img src={logo} alt="logo" onClick={backToHome}/>
    </div>
    <div className='options'>
      <img src={iconSearch} alt="search" />
      <img src={shoppingCart} alt="shoppingCart" onClick={props.methods}/>
      <img src={person} alt="" />
    </div>
  </nav>
}

export default NavBar;
