import React from 'react';
import '../styles/Header.scss';
import briz from '../assets/images/wind-cartoon.png';

class Header extends React.Component{
    render(){
        return(
          <div className="header">
              <img className="header-logo" src={briz} alt="briz logo"/>
              <h1 className="logo">brīz</h1>
          </div>
        )
    }
}

export default Header;