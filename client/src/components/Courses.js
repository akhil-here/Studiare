import React from 'react';

class Cart extends React.Component{
    render(){
        return(

      <div id="container">
        {/* Header
		    ================================================== */}
        <header className="clearfix">
          <div className="top-line">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p><i className="material-icons">phone</i> <span>+01 2334 853</span></p>
                  <p><i className="material-icons">email</i> <span>email@mycourse.com</span></p>
                </div>
                <div className="col-md-6">
                  <div className="right-top-line">
                    <ul className="top-menu">
                      <li><a href="#">Purchase Now</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="blog.html">News</a></li>
                    </ul>
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
              <a href="#" className="mobile-nav-toggle"> 
                <span />
              </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="drop-link">
                    <a className="active" href="index.html">Home</a>
                  </li>
                  <li className="drop-link">
                    <a href="about.html">Pages <i className="fa fa-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="pricing.html">Pricing Packages</a></li>
                      <li><a href="portfolio.html">Portfolio</a></li>
                      <li><a href="single-project.html">Portfolio Single</a></li>
                      <li><a href="teachers.html">Teachers</a></li>
                      <li><a href="single-teacher.html">Teacher Single</a></li>
                      <li className="drop-link">
                        <a href="#">Submenu Level 1</a>
                        <ul className="dropdown level2">
                          <li><a href="#">Submenu Level 2</a></li>
                          <li className="drop-link">
                            <a href="#">Submenu Level 2</a>
                            <ul className="dropdown level2">
                              <li><a href="#">Submenu Level 3</a></li>
                              <li><a href="#">Submenu Level 3</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Submenu Level 2</a></li>
                        </ul>
                      </li>
                      <li><a href="cart.html">Shopping Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                    </ul>
                  </li>
                  <li className="drop-link">
                    <a href="blog.html">Blog <i className="fa fa-angle-down" /></a>
                    <ul className="dropdown">
                      <li className="drop-link">
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
                      </li>
                      <li><a href="blog.html">Blog Classic</a></li>
                      <li><a href="single-post.html">Post Single</a></li>
                    </ul>
                  </li>
                  <li className="drop-link">
                    <a href="courses.html">Courses</a>
                  </li>
                  <li><a href="events.html">Events</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <a href="#" className="register-modal-opener login-button"><i className="material-icons">perm_identity</i> Get Started</a>
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
                <li className="drop-link">
                  <a href="#">Pages</a>
                  <ul className="drop-level">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="pricing.html">Pricing Packages</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="single-project.html">Portfolio Single</a></li>
                    <li><a href="teachers.html">Teachers</a></li>
                    <li><a href="single-teacher.html">Teacher Single</a></li>
                    <li><a href="cart.html">Shopping Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="single-teacher.html">Teacher Single</a></li>
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
                  <a href="blog.html">Blog</a>
                  <ul className="drop-level">
                    <li className="drop-link">
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
                    </li>
                    <li><a href="blog.html">Blog Classic</a></li>
                    <li><a href="single-post.html">Post Single</a></li>
                  </ul>
                </li>
                <li>
                  <a href="courses.html">Courses</a>
                </li>
                <li>
                  <a href="events.html">Events</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* End Header */}
        {/* page-banner-section 
			================================================== */}
        <section className="page-banner-section">
          <div className="container">
            <h1>Courses</h1>
            <ul className="page-depth">
              <li><a href="index.html">Home</a></li>
              <li><a href="courses.html">Courses</a></li>
            </ul>
          </div>
        </section>
        {/* End page-banner-section */}
        {/* courses-section 
			================================================== */}
        <section className="courses-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="courses-top-bar">
                  <div className="courses-view">
                    <a href="courses.html" className="grid-btn active">
                      <i className="fa fa-th-large" aria-hidden="true" />
                    </a>
                    <a href="courses-list.html" className="grid-btn">
                      <i className="fa fa-bars" aria-hidden="true" />
                    </a>
                    <span>Showing all 9 results</span>
                  </div>
                  <form className="search-course">
                    <input type="search" name="search" id="search_course" placeholder="Search Courses..." />
                    <button type="submit">
                      <i className="material-icons">search</i>
                    </button>
                  </form>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Introduction Web Design with HTML</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">5.00</span>
                                <span className="votes-number">1 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Duha Samra</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>64</span>
                          </div>
                          <div className="course-price">
                            <span>£244</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Special Education Needs Teaching</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">3.50</span>
                                <span className="votes-number">2 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Leon Redding</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>134</span>
                          </div>
                          <div className="course-price">
                            <span>£74.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Environmental Science BTEC Course</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">No Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Linda Castello</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>0</span>
                          </div>
                          <div className="course-price">
                            <span>£18.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/4.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Distance Learning MBA Management</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">4.50</span>
                                <span className="votes-number">2 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Michael Arnett</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>263</span>
                          </div>
                          <div className="course-price">
                            <span>£29.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/5.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Introduction Web Design with HTML</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">5.00</span>
                                <span className="votes-number">1 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Duha Samra</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>64</span>
                          </div>
                          <div className="course-price">
                            <span>£244</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/6.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Special Education Needs Teaching</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">3.50</span>
                                <span className="votes-number">2 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Leon Redding</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>134</span>
                          </div>
                          <div className="course-price">
                            <span>£74.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/7.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Environmental Science BTEC Course</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">No Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Linda Castello</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>0</span>
                          </div>
                          <div className="course-price">
                            <span>£18.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/8.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Distance Learning MBA Management</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">4.50</span>
                                <span className="votes-number">2 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Michael Arnett</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>263</span>
                          </div>
                          <div className="course-price">
                            <span>£29.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="single-course.html">
                          <img src="./assets/upload/courses/9.jpg" alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="single-course.html">Introduction Web Design with HTML</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">5.00</span>
                                <span className="votes-number">1 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">Duha Samra</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>64</span>
                          </div>
                          <div className="course-price">
                            <span>£244</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="category-widget widget">
                    <h2>Product categories</h2>
                    <ul className="category-list">
                      <li><a href="#">Design</a></li>
                      <li><a href="#">Photography</a></li>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Web Design</a></li>
                      <li><a href="#">Web Development</a></li>
                    </ul>
                  </div>
                  <div className="products-widget widget">
                    <h2>Products</h2>
                    <ul className="products-list">
                      <li>
                        <a href="single-course.html"><img src="./assets/upload/courses/thumb1.jpg" alt="" /></a>
                        <div className="list-content">
                          <h3><a href="single-course.html">Introduction Web Design with HTML</a></h3>
                          <span>$244</span>
                        </div>
                      </li>
                      <li>
                        <a href="single-course.html"><img src="./assets/upload/courses/thumb2.jpg" alt="" /></a>
                        <div className="list-content">
                          <h3><a href="single-course.html">Special Education Needs Teaching</a></h3>
                          <span>$74.99</span>
                        </div>
                      </li>
                      <li>
                        <a href="single-course.html"><img src="./assets/upload/courses/thumb3.jpg" alt="" /></a>
                        <div className="list-content">
                          <h3><a href="single-course.html">Environmental Science BTEC Course</a></h3>
                          <span>$59.99</span>
                        </div>
                      </li>
                      <li>
                        <a href="single-course.html"><img src="./assets/upload/courses/thumb4.jpg" alt="" /></a>
                        <div className="list-content">
                          <h3><a href="single-course.html">Distance Learning MBA Management</a></h3>
                          <span>$17.88</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ads-widget widget">
                    <a href="#">
                      <img src="./assets/upload/blog/ad-banner.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End courses section */}
        {/* footer 
			================================================== */}
        <footer>
          <div className="container">
            <div className="up-footer">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget text-widget">
                    <a href="index.html" className="footer-logo"><img src="./assets/images/logo_light.svg" alt="" /></a>
                    <p>We named our theme Studiare because to us,<br /> the best brands are simple ones. Brands thrive<br /> on their ability to be understood.</p>
                    <ul>
                      <li>
                        <div className="contact-info-icon">
                          <i className="material-icons">location_on</i>
                        </div>
                        <div className="contact-info-value">127 Elizabeth Street, NY New York</div>
                      </li>
                      <li>
                        <div className="contact-info-icon">
                          <i className="material-icons">phone_android</i>
                        </div>
                        <div className="contact-info-value">+55-11-3097-0508</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget quick-widget">
                    <h2>Quick Links</h2>
                    <ul className="quick-list">
                      <li><a href="contact.html">Contact</a></li>
                      <li><a href="pricing.html">Pricing Packages</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="courses.html">Courses</a></li>
                      <li><a href="blog.html">News</a></li>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="#">Sample Page</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget subscribe-widget">
                    <h2>Newsletter</h2>
                    <p>Don’t miss anything, sign up now and keep informed about our company.</p>
                    <div className="newsletter-form">
                      <input className="form-control" type="email" name="EMAIL" placeholder="Enter Your E-mail" required />
                      <input type="submit" defaultValue="Subscribe" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright copyrights-layout-default">
            <div className="container">
              <div className="copyright-inner">
                <div className="copyright-cell"> © 2019 <span className="highlight">Studiare</span>. Created by CodeBean Team.</div>
                <div className="copyright-cell">
                  <ul className="studiare-social-links">
                    <li><a href="#" className="facebook"><i className="fa fa-facebook-f" /></a></li>
                    <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End footer */}
      </div>
    
        )
    }
}
export default Cart;