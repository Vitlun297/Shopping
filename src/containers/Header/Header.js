import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingBag from '../../akar-icons_shopping-bag.png'

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="container-header">
        <Link to="/">
          <h2>FakeShop</h2>
          </Link>
        <div className="container-menu">
          <Link to='/cart' className="menu-btn">
            <img className="menu-icon" srcSet={ShoppingBag} alt="Search" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
