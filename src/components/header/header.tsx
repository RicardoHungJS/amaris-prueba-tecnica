import { FC, useEffect, useState } from "react";
import './header.scss';
import logo from '../../assets/svg/logo.svg'
import iconSearch from '../../assets/svg/icon-search.svg'

interface IProps {
}

const HeaderComponent: FC<IProps> = () => {
    return (
        <div className="header-component-container">
            <img className="logo-header" src={logo} alt="Logo woo commerce" />
            <div className="header-button-box">
                <p>Sell</p>
                <p>Marketplace</p>
                <p>Community</p>
                <p>Analyze</p>
                <p>Downloads</p>
            </div>

            <div className="singin-button-box">
                <button className="login-button">Log In</button>
                <button className="started-button">Get Started</button>
                <img className="search-button" src={iconSearch} alt="" />
            </div>
        </div>
    );
};

export default HeaderComponent;