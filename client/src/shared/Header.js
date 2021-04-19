import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../App';
import {connect} from 'react-redux';

const Header = props => {
  const {state, dispatch} = useContext (UserContext);
  const history = useHistory ();
  const username = JSON.parse (localStorage.getItem ('user')).name;
  const userrole = JSON.parse (localStorage.getItem ('user')).role;
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
                  <span>+9869101921</span>
                </p>
                <p>
                  <i className="material-icons">email</i>
                  {' '}
                  <span>studiare.miniproject@gmail.com</span>
                </p>
              </div>
              <div className="col-md-6">
                <div className="right-top-line">

                  <button
                    className="shop-icon"
                    style={{backgroundColor: '#201140', marginTop: '0.1rem'}}
                  >
                    <Link to="/Cart">
                      <i className="material-icons">
                        shopping_cart
                      </i>
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

        <nav
          className="navbar navbar-expand-lg"
          style={{backgroundColor: '#201140'}}
        >
          <div className="container">
            <Link className="navbar-brand" to={'/home'} style={{width: '1rem'}}>
              <img src="./assets/images/logo.png" alt="" />
            </Link>
            <Link to="#" className="mobile-nav-toggle">
              <span />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mr-auto"
                style={{
                  marginLeft: '10rem',
                }}
              >
                <li className="drop-link">
                  <Link className="active" to="/home">Home</Link>
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
              </ul>
              <button
                className="btn waves-effect shadow mr-2 mt-2 "
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
              {(() => {
                if (userrole === 'Teacher') {
                  return (
                    <Link
                      to="/teachersprofile"
                      className="register-modal-opener shadow login-button"
                      style={{
                        backgroundColor: '#ffb037',
                        color: 'black',
                      }}
                    >
                      <i className="material-icons mt-2">perm_identity</i>
                      {username}'s profile
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      to="/userprofile"
                      className="register-modal-opener shadow login-button"
                      style={{
                        backgroundColor: '#ffb037',
                        color: 'black',
                      }}
                    >
                      <i className="material-icons mt-2">perm_identity</i>
                      {username}'s profile
                    </Link>
                  );
                }
              }) ()}

            </div>
          </div>
        </nav>
        <div className="mobile-menu">

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
                <Link to="/home">Home</Link>
              </li>

              <li className="drop-link">
                <Link to={'/allblogslist'}>Blog</Link>
              </li>
              <li className="drop-link">
                <Link to="/allcourseslist">Courses</Link>
              </li>
              <li><Link to="/alleventslist">Events</Link></li>
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
              <Link
                to="#"
                className="register-modal-opener shadow login-button mt-2"
                style={{
                  backgroundColor: '#ffb037',
                  color: 'black',
                }}
              >
                <i className="material-icons mt-2">perm_identity</i>
                {username}'s profile
              </Link>
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
