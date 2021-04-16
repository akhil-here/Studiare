import React from 'react';
import Header from '../../shared/Header';
import {connect} from 'react-redux';

const Checkout = props => {
  return (
    <div>
      <Header />

      {/* Container */}
      <div id="container">
        {/* page-banner-section 
              ================================================== */}
        <section className="page-banner-section">
          <div className="container">
            <h1>Checkout</h1>
            <ul className="page-depth">
              <li><a href="/">Studiare</a></li>
              <li><a href="/Checkout">Checkout</a></li>
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
                  <h2>Billing details</h2>
                  <form className="billing-details">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="first-name">First Name*</label>
                        <input type="text" id="first-name" />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="last-name">Last Name*</label>
                        <input type="text" id="last-name" />
                      </div>
                    </div>
                    <label htmlFor="company-name">
                      Company name (optional)
                    </label>
                    <input type="text" id="company-name" />
                    <label htmlFor="country">Country*</label>
                    <select id="country">
                      <option>Country...</option>
                      <option>Albania</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>Brazil</option>
                      <option>Germany</option>
                      <option>England</option>
                      <option>France</option>
                      <option>Italy</option>
                      <option>Australia</option>
                    </select>
                    <label htmlFor="street-name">Street address *</label>
                    <input
                      type="text"
                      id="street-name"
                      placeholder="House number and street name"
                    />
                    <input
                      type="text"
                      id="street-name2"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                    <label htmlFor="city-name">Town / City*</label>
                    <input type="text" id="city-name" />
                    <label htmlFor="state-name">State / Country*</label>
                    <input type="text" id="state-name" />
                    <label htmlFor="postcode-name">Postcode / Zip*</label>
                    <input type="text" id="postcode-name" />
                    <label htmlFor="phone-name">Phone*</label>
                    <input type="text" id="phone-name" />
                    <label htmlFor="email-address">Email Address*</label>
                    <input type="text" id="email-address" />
                    <h2>Additional information</h2>
                    <label htmlFor="notes">Order notes (optional)</label>
                    <textarea
                      id="notes"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                      defaultValue={''}
                    />
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="widget cart-widget">
                    <h2>Your order</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>Product</td>
                          <td>Total</td>
                        </tr>
                        {props.newState.cart.map ((item, index) => (
                          <tr>
                            <td
                              className="name-pro"
                              style={{fontWeight: 'bold'}}
                            >
                              {props.newState.cart[index]}
                            </td>
                            <td>₹{props.newState.price[index]}</td>
                          </tr>
                        ))}

                        <tr className="order-total">
                          <th>Subtotal</th>
                          <td>
                            ₹ {props.newState.price.reduce (function (
                              tot,
                              arr
                            ) {
                              // return the sum with previous value
                              return tot + arr;

                              // set initial value as 0
                            }, 0)}
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                          <td className="">
                            ₹ {props.newState.price.reduce (function (
                              tot,
                              arr
                            ) {
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

                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="checkout-button">
                      Proceed to Paypal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End cart section */}
      </div>
      {/* End Container */}
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
    // removeItemHandler:(item)=>dispatch(removeItems(item))
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Checkout);
