import React from 'react';
import Header from '../../shared/Header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import removeItems from '../../redux/actions/removeItems';

const Cart = props => {
  return (
    <div id="container">
      <Header />
      {/* page-banner-section 
          ================================================== */}
      <section className="page-banner-section">
        <div className="container">
          <h1>Cart</h1>
          <ul className="page-depth">
            <li><Link to="/home">Studiare</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
      </section>
      {/* End page-banner-section */}
      {/* cart-section 
          ================================================== */}
      <section className="cart-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-box">
                <table className="shop_table table-responsive">
                  <thead>
                    <tr>
                      <th className="product-remove">&nbsp;</th>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-subtotal">Total</th>
                    </tr>
                  </thead>
                  <tbody>

                    {props.newState.cart.map ((item, index) => (
                      <tr>
                        <td className="product-remove">
                          <Link
                            className="remove"
                            onClick={() => {
                              props.removeItemHandler ({index: index});
                            }}
                          >
                            ×
                          </Link>
                        </td>

                        <td className="product-thumbnail">
                          <span>
                            <img src={props.newState.photo[index]} alt="" />
                          </span>
                        </td>
                        <td className="product-name">
                          <span>{props.newState.cart[index]}</span>
                        </td>
                        <td className="product-price">
                          ₹{props.newState.price[index]}
                        </td>
                        <td className="product-subtotal">
                          ₹{props.newState.price[index]}
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget cart-widget">
                  <h2>Cart Totals</h2>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        ₹ {props.newState.price.reduce (function (tot, arr) {
                          // return the sum with previous value
                          return tot + arr;

                          // set initial value as 0
                        }, 0)}
                      </tr>
                      <tr className="cart-subtotal">
                        <th>With GST</th>
                        ₹ {props.newState.price.reduce (function (tot, arr) {
                          // return the sum with previous value
                          return tot + arr;

                          // set initial value as 0
                        }, 0) *
                          0.18 +
                          props.newState.price.reduce (function (tot, arr) {
                            // return the sum with previous value
                            return tot + arr;

                            // set initial value as 0
                          }, 0)}
                      </tr>

                    </tbody>
                  </table>
                  <Link to="/checkout" className="checkout-button">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End cart section */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newState: state._cartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemHandler: item => dispatch (removeItems (item)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Cart);
