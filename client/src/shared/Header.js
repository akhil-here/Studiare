import React, {useContext} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {UserContext} from '../App';

const Header = () => {
  const {state, dispatch} = useContext (UserContext);
  const history = useHistory ();
  const name = localStorage.getItem ('user');
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
                    <li><a href="/">About</a></li>
                  </ul>
                  <button className="search-icon">
                    <i className="material-icons open-search">search</i>
                    <i className="material-icons close-search">close</i>
                  </button>
                  <button className="shop-icon">
                    <a href="/Cart">
                      <i className="material-icons">shopping_cart</i>
                    </a>
                    <span className="studiare-cart-number">0</span>
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
            <Link className="navbar-brand" to={'/'}>
              <img src="./assets/images/logo.svg" alt="" />
            </Link>
            <Link href="#" className="mobile-nav-toggle">
              <span />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="drop-link">
                  <Link className="active" to="/">Home</Link>
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
                      <a href="#">Submenu Level 1</a>
                      <ul className="dropdown level2">
                        <li><a href="#">Submenu Level 2</a></li>
                        <li className="drop-link">
                          <a href="#">Submenu Level 2</a>
                          <ul className="dropdown level2">
                            <li><Link to={'/'}>Submenu Level 3</Link></li>
                            <li><Link to={'/'}>Submenu Level 3</Link></li>
                          </ul>
                        </li>
                        <li><a href="#">Submenu Level 2</a></li>
                      </ul>
                    </li>
                    <li><a href="/Cart">Shopping Cart</a></li>
                    <li><a href="/Checkout">Checkout</a></li>
                  </ul>
                </li>
                <li className="drop-link">
                  <a href="/BlogGrid4">
                    Blog <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown">
                    {/* <li className="drop-link">
                            <a href="blog-list.html">Blog List</a>
                            <ul className="dropdown level2">
                              <li><a href="blog-list-leftsidebar.html">Blog List - Sidebar Left</a></li>
                              <li><a href="blog-list-rightsidebar.html">Blog List - Sidebar Right</a></li>
                              <li><a href="blog-list.html">No Sidebar</a></li>
                            </ul>
                          </li>
                          <li className="drop-link">
                            <a href="blog-grid-3.html">Blog Grid</a>
                            <ul className="dropdown level2">
                              <li><a href="blog-grid-3.html">3 Column</a></li>
                              <li><a href="blog-grid-4.html">4 Column</a></li>
                              <li><a href="blog-grid-leftsidebar.html">Sidebar Left</a></li>
                              <li><a href="blog-grid-rightsidebar.html">Sidebar Right</a></li>
                            </ul>
                          </li> */}
                    <li><a href="/BlogGrid4">Blog Grid 4</a></li>
                    <li><a href="/SinglePost">Post Single</a></li>
                    <li>
                      <a href="/BlogGridLeftsidebar">BlogGridLeftsidebar</a>
                    </li>
                  </ul>
                </li>
                <li className="drop-link">
                  <a href="/Courses">Courses</a>
                </li>
                <li><Link to="/Events">Events</Link></li>
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
              <a href="#" className="register-modal-opener login-button">
                <i className="material-icons">perm_identity</i>
                {/* {localStorage.getItem ('user')} */}
                {name}
              </a>
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
            <a className="shop-icon" href="/Cart">
              <i className="material-icons">shopping_cart</i>
              Cart
              <span className="studiare-cart-number">0</span>
            </a>
          </div>
          <nav className="mobile-nav">
            <ul className="mobile-menu-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="drop-link">
                <a href="#">Pages</a>
                <ul className="drop-level">
                  <li><a href="/">About Us</a></li>
                  <li><a href="/Pricing">Pricing Packages</a></li>
                  <li><Link to="/Portfolio">Portfolio</Link></li>
                  <li><Link to={'/Teachers'}>Teachers</Link></li>
                  <li><Link to={'/SingleTeacher'}>Teacher Single</Link></li>
                  <li className="drop-link">
                    <a href="#">Submenu Level 1</a>
                    <ul className="drop-level">
                      <li><a href="#">Submenu Level 2</a></li>
                      <li className="drop-link">
                        <a href="#">Submenu Level 2</a>
                        <ul className="drop-level">
                          <li><a href="#">Submenu Level 3</a></li>
                          <li><a href="#">Submenu Level 3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Submenu Level 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="drop-link">
                <a href="/BlogGrid4">Blog</a>
                <ul className="drop-level">
                  {/* <li className="drop-link">
                          <a href="blog-list.html">Blog List</a>
                          <ul className="drop-level">
                            <li><a href="blog-list-leftsidebar.html">Blog List - Sidebar Left</a></li>
                            <li><a href="blog-list-rightsidebar.html">Blog List - Sidebar Right</a></li>
                            <li><a href="blog-list.html">No Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="drop-link">
                          <a href="blog-grid-3.html">Blog Grid</a>
                          <ul className="drop-level">
                            <li><a href="blog-grid-3.html">3 Column</a></li>
                            <li><a href="blog-grid-4.html">4 Column</a></li>
                            <li><a href="blog-grid-leftsidebar.html">Sidebar Left</a></li>
                            <li><a href="blog-grid-rightsidebar.html">Sidebar Right</a></li>
                          </ul>
                        </li> */}
                  <li><a href="/BlogGrid4">Blog Grid 4</a></li>
                  <li><a href="/SinglePost">Post Single</a></li>
                  <li>
                    <a href="/BlogGridLeftsidebar">BlogGridLeftsidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/Courses">Courses</a>
              </li>
              <li>
                <a href="/Events">Events</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
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

export default Header;
