import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="container-header-top">
            <div className="container-header">
                <h2>FakeShop</h2>
            </div>
            <div className="container-menu">
                <Link to='/' className="menu-btn">
                    <img className="menu-icon" srcSet="./assets/images/charm_search.png" alt="Search" />
                </Link>
                <Link to='/' className="menu-btn">
                    <img className="menu-icon" srcSet="./assets/images/akar-icons_heart.png" alt="Search" />
                </Link>
                <Link to='/' className="menu-btn">
                    <img className="menu-icon" srcSet="./assets/images/akar-icons_shopping-bag.png" alt="Search" />
                </Link>
            </div>
        </div>
    );
};

export default Header;