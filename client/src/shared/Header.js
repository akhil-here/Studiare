import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Header extends Component{
    render(){
        return(
            <div id="container">
                <header className="clearfix">
                    <div className="top-line">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6"/>
                                <div className="col-lg-6">
                                    <div className="right-top-line">
                                    <button className="search-icon">
                                        <i className="material-icons open-search">search</i> 
                                        <i className="material-icons close-search">close</i>
                                    </button>
                                    <button className="shop-icon">
                                        <i className="material-icons">shopping_cart</i>
                                        <span className="studiare-cart-number">0</span>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="search_bar">
                    <div className="container">
                        <input type="search" className="search-input" placeholder="What are you looking for..." />
                        <button type="submit" className="submit">
                        <i className="material-icons">search</i>
                        </button>
                    </div>
                    </form>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                        <img src="./assets/images/logo.svg" alt="" />
                        </a>
                        <a href="/" className="mobile-nav-toggle"> 
                        <span />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="drop-link">
                            <a className="active" href="index.html">Home</a>
                            </li>
                            <li className="drop-link">
                            <a href="courses.html">Courses</a>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <Link to="/home" className="register-modal-opener login-button">
                            Hi Akhil
                        </Link>
                        </div>
                    </div>
                    </nav>
                    <div className="mobile-menu">
                    <div className="search-form-box">
                        <form className="search-form">
                        <input type="search" className="search-field" placeholder="Enter keyword..." />
                        <button type="submit" className="search-submit">
                            <i className="material-icons open-search">search</i> 
                        </button>
                        </form>
                    </div>
                    <div className="shopping-cart-box">
                        <a className="shop-icon" href="cart.html">
                        <i className="material-icons">shopping_cart</i>
                        Cart
                        <span className="studiare-cart-number">0</span>
                        </a>
                    </div>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu-list">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="courses.html">Courses</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </header>
      </div>
        );
    }
}

export default Header;