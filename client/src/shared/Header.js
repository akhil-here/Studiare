import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../App';
import {connect} from 'react-redux';

const Header = props => {
  const {state, dispatch} = useContext (UserContext);
  const history = useHistory ();
  return (
    <div>
      <header className="clearfix">
        <div className="top-line">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <i className="material-icons">phone</i>
                  {' '}
                  <span>+01 2334 853</span>
                </p>
                <p>
                  <i className="material-icons">email</i>
                  {' '}
                  <span>email@mycourse.com</span>
                </p>
              </div>
              <div className="col-md-6">
                <div className="right-top-line">
                  <ul className="top-menu">
                    <li><Link to="/">About</Link></li>
                  </ul>
                  <button className="search-icon">
                    <i className="material-icons open-search">search</i>
                    <i className="material-icons close-search">close</i>
                  </button>
                  <button className="shop-icon">
                    <Link to="/Cart">
                      <i className="material-icons">shopping_cart</i>
                    </Link>
                    <span className="studiare-cart-number">
                      {props.newState.numberCart}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="search_bar">
          <div className="container">
            <input
              type="search"
              className="search-input"
              placeholder="What are you looking for..."
            />
            <button type="submit" className="submit">
              <i className="material-icons">search</i>
            </button>
          </div>
        </form>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to={'/home'}>
              <img src="./assets/images/logo.svg" alt="" />
            </Link>
            <Link to="#" className="mobile-nav-toggle">
              <span />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="drop-link">
                  <Link className="active" to="/home">Home</Link>
                </li>
                <li className="drop-link">
                  <Link to={'/'}>
                    Pages <i className="fa fa-angle-down" />
                  </Link>
                  <ul className="dropdown">
                    <li><Link to={'/Portfolio'}>Portfolio</Link></li>
                    <li><Link to={'/Teachers'}>Teachers</Link></li>
                    <li><Link to={'/SingleTeacher'}>Teacher Single</Link></li>
                    <li className="drop-link">
                      <Link to="#">Submenu Level 1</Link>
                      <ul className="dropdown level2">
                        <li><Link to="#">Submenu Level 2</Link></li>
                        <li className="drop-link">
                          <Link to="#">Submenu Level 2</Link>
                          <ul className="dropdown level2">
                            <li><Link to={'/'}>Submenu Level 3</Link></li>
                            <li><Link to={'/'}>Submenu Level 3</Link></li>
                          </ul>
                        </li>
                        <li><Link to="#">Submenu Level 2</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/Cart">Shopping Cart</Link></li>
                    <li><Link to="/Checkout">Checkout</Link></li>
                  </ul>
                </li>
                <li className="drop-link">
                  <Link to="/allblogslist">
                    Blogs
                  </Link>
                </li>
                <li className="drop-link">
                  <Link to="/allcourseslist">Courses</Link>
                </li>
                <li><Link to="/alleventslist">Events</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li>
                  <button
                    className="btn waves-effect shadow "
                    onClick={() => {
                      localStorage.clear ();
                      dispatch ({type: 'CLEAR'});
                      history.push ('/login');
                    }}
                    style={{
                      backgroundColor: '#ce1212',
                      color: 'white',
                      marginTop: '2rem',
                    }}
                  >
                    Log Out{' '}
                  </button>
                </li>
              </ul>
              <Link to="#" className="register-modal-opener login-button">
                <i className="material-icons mt-2">perm_identity</i>
                My account
              </Link>
            </div>
          </div>
        </nav>
        <div className="mobile-menu">
          <div className="search-form-box">
            <form className="search-form">
              <input
                type="search"
                className="search-field"
                placeholder="Enter keyword..."
              />
              <button type="submit" className="search-submit">
                <i className="material-icons open-search">search</i>
              </button>
            </form>
          </div>
          <div className="shopping-cart-box">
            <Link className="shop-icon" to="/Cart">
              <i className="material-icons">shopping_cart</i>
              Cart
              <span className="studiare-cart-number">0</span>
            </Link>
          </div>
          <nav className="mobile-nav">
            <ul className="mobile-menu-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="drop-link">
                <Link to="#">Pages</Link>
                <ul className="drop-level">
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/Pricing">Pricing Packages</Link></li>
                  <li><Link to="/Portfolio">Portfolio</Link></li>
                  <li><Link to={'/Teachers'}>Teachers</Link></li>
                  <li><Link to={'/SingleTeacher'}>Teacher Single</Link></li>
                  <li className="drop-link">
                    <Link to="#">Submenu Level 1</Link>
                    <ul className="drop-level">
                      <li><Link to="#">Submenu Level 2</Link></li>
                      <li className="drop-link">
                        <Link to="#">Submenu Level 2</Link>
                        <ul className="drop-level">
                          <li><Link to="#">Submenu Level 3</Link></li>
                          <li><Link to="#">Submenu Level 3</Link></li>
                        </ul>
                      </li>
                      <li><Link to="#">Submenu Level 2</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="drop-link">
                <Link to="/BlogGrid4">Blog</Link>
                <ul className="drop-level">
                  {/* <li className="drop-link">
                          <Link to="blog-list.html">Blog List</Link>
                          <ul className="drop-level">
                            <li><Link to="blog-list-leftsidebar.html">Blog List - Sidebar Left</Link></li>
                            <li><Link to="blog-list-rightsidebar.html">Blog List - Sidebar Right</Link></li>
                            <li><Link to="blog-list.html">No Sidebar</Link></li>
                          </ul>
                        </li>
                        <li className="drop-link">
                          <Link to="blog-grid-3.html">Blog Grid</Link>
                          <ul className="drop-level">
                            <li><Link to="blog-grid-3.html">3 Column</Link></li>
                            <li><Link to="blog-grid-4.html">4 Column</Link></li>
                            <li><Link to="blog-grid-leftsidebar.html">Sidebar Left</Link></li>
                            <li><Link to="blog-grid-rightsidebar.html">Sidebar Right</Link></li>
                          </ul>
                        </li> */}
                  <li><Link to="/BlogGrid4">Blog Grid 4</Link></li>
                  <li><Link to="/SinglePost">Post Single</Link></li>
                  <li>
                    <Link to="/BlogGridLeftsidebar">BlogGridLeftsidebar</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Courses">Courses</Link>
              </li>
              <li>
                <Link to="/Events">Events</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <button
                  className="btn waves-effect shadow "
                  onClick={() => {
                    localStorage.clear ();
                    dispatch ({type: 'CLEAR'});
                    history.push ('/login');
                  }}
                  style={{
                    backgroundColor: '#ce1212',
                    color: 'white',
                  }}
                >

                  Log Out{' '}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    newState: state._cartItems,
  };
};

export default connect (mapStateToProps, null) (Header);

// export default Header;
