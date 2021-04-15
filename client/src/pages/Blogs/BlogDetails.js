
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
                <h1>Academics</h1>
                <ul className="page-depth">
                  <li><a href="index.html">Studiare</a></li>
                  <li><a href="blog.html">News</a></li>
                  <li><a href="blog-grid-3.html">Academics</a></li>
                  <li><a href="single-post.html">Couple Of Happy College Students Graduated</a></li>
                </ul>
              </div>
            </section>
            {/* End page-banner-section */}
            {/* blog-section 
                ================================================== */}
            <section className="blog-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-7">
                    <div className="blog-box">
                      <div className="blog-post single-post">
                        <div className="post-content">
                          <h1>Couple Of Happy College Students Graduated</h1>
                          <div className="post-meta date">
                            <i className="material-icons">access_time</i> June 13, 2018
                          </div>
                          <div className="post-meta user">
                            <i className="material-icons">perm_identity</i> Posted by <a href="#">codebean</a>
                          </div>
                          <div className="post-meta category">
                            <i className="material-icons">folder_open</i><a href="#">Academics</a>, <a href="#">School</a>
                          </div>
                        </div>
                        <a href="single-post.html"><img src="./assets/upload/blog/blog-image-1.jpg" alt="" /></a>
                        <div className="post-content">
                          <p>CSS. It’s a web designer’s playpen. With so many colors, type settings, layout options, and responsive possibilities, it’s easy to turn a stylesheet into a million line nightmare. However, with a few simple actions you can clean up the mess so the CSS works with you, not against you. A few weeks ago, frontend developer Julie Cameron came through our virtual Treehouse office and bestowed some wisdom we still can’t shake. So now I’m sharing it with you all!</p>
                          <h2>It’s only natural. Entanglement happens.</h2>
                          <p>The cascade. It’s a blessing and a curse. It’s often the case that when you change the styling of one element, other elements inadvertently get restyled. Misuse of !important makes the cascade come to a screeching halt, and leaves you with inconsistencies from one element styling to the next. As websites get bigger or more developers start working on the codebase,</p>
                          <blockquote>
                            the CSS tends to grow as well. Without a plan, it becomes the Wild Wild West (wickey wild, wicky wicky wild wild wild west…Will Smith isn’t gonna get you out of this one).
                          </blockquote>
                          <ul className="text-list">
                            <li>Modular – You can get to the point of building a page without writing a single line of CSS.</li>
                            <li>Predictable – It doesn’t matter where you put the component, it’ll behave the same and look the same. It’s easy to write the code. You have systems in place for naming it. It’s more intuitive to write.</li>
                            <li>Maintainable – It’s quick and easy to deal with. It won’t break other things on the site.</li>
                            <li>Scalable – It’s hard to break and easy to build onto.</li>
                            <li>Dry – It eliminates the need for copy and paste duplication in the CSS.</li>
                            <li>Organized – There’s a place for everything.</li>
                          </ul>
                          <p><span>Separation of container from content</span> means that objects should look the same no matter where you put them. In other words, avoid location-dependent styles. For example, if you’re styling an h2 like this…</p>
                          <div className="tags-share-box">
                            <ul className="tags-list">
                              <li><span>Tags:</span></li>
                              <li><a href="#">course</a></li>
                              <li><a href="#">theme</a></li>
                              <li><a href="#">HTML Template</a></li>
                            </ul>
                            <ul className="share-list">
                              <li><span>Share:</span></li>
                              <li><a href="#" className="facebook"><i className="fa fa-facebook-f" /></a></li>
                              <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                              <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>
                              <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                          </div>
                          <div className="about-author">
                            <div className="image-holder">
                              <img src="./assets/upload/blog/avatar.jpg" alt="" />
                            </div>
                            <div className="author-content">
                              <h2>About codebean</h2>
                              <p>Aenean eu justo id magna luctus pulvinar. Quisque vitae scelerisque eros. Pellentesque pretium felis non libero pharetra feugiat id ac sem. Suspendisse ac metus justo.</p>
                              <a className="button-one" href="#">More posts by codebean</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-nav">
                        <div className="post-nav-btn prev-btn">
                          <a href="#" className="post-nav-link prev">
                            <i className="material-icons">arrow_back</i>
                            <span>Newer</span>
                            Reflections for the Season of Advent
                          </a>
                        </div>
                        <div className="post-nav-btn next-btn">
                          <a href="#" className="post-nav-link next">
                            <i className="material-icons">arrow_forward</i>
                            <span>Older</span>
                            Couple Of Happy College Students Graduated
                          </a>
                        </div>
                      </div>
                      <div className="comments-holder">
                        <h2>4 Comments</h2>
                        <p>Join the discussion and tell us your opinion.</p>
                        <ul className="comment-list">
                          <li>
                            <div className="image-holder">
                              <img src="./assets/upload/blog/avatar4.jpg" alt="" />
                            </div>
                            <div className="comment-content">
                              <h2>
                                Marcy Washington
                                <span>June 14, 2018</span>
                                <a href="#"><i className="fa fa-commenting-o" />Reply</a>
                              </h2>
                              <p>Learnt a lot about masks too. Thank you for sharing.</p>
                            </div>
                            <ul className="depth-comment">
                              <li>
                                <div className="image-holder">
                                  <img src="./assets/upload/blog/avatar2.jpg" alt="" />
                                </div>
                                <div className="comment-content">
                                  <h2>
                                    Caleb Torres
                                    <span>June 14, 2018</span>
                                    <a href="#"><i className="fa fa-commenting-o" />Reply</a>
                                  </h2>
                                  <p>Nice result Caroline! Glad you enjoyed it</p>
                                </div>
                                <ul className="depth-comment">
                                  <li>
                                    <div className="image-holder">
                                      <img src="./assets/upload/blog/avatar4.jpg" alt="" />
                                    </div>
                                    <div className="comment-content">
                                      <h2>
                                        Marcy Washington
                                        <span>June 14, 2018</span>
                                        <a href="#"><i className="fa fa-commenting-o" />Reply</a>
                                      </h2>
                                      <p>This was great thank you Caleb</p>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="image-holder">
                              <img src="./assets/upload/blog/avatar3.jpg" alt="" />
                            </div>
                            <div className="comment-content">
                              <h2>
                                Andrew
                                <span>June 14, 2018</span>
                                <a href="#"><i className="fa fa-commenting-o" />Reply</a>
                              </h2>
                              <p>Great article. I think that companies create their strongest user advocates when designers and developers understand the value of great user experience.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <form className="comment-form">
                        <h2>Leave a Reply</h2>
                        <p>Logged in as besimdauti24. <a href="#">Log out?</a></p>
                        <label>Comment</label>
                        <textarea defaultValue={""} />
                        <button type="submit">
                          Post Comment
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5">
                    <div className="sidebar">
                      <div className="search-widget widget">
                        <form className="search-form">
                          <input type="search" className="search-field" placeholder="Enter keyword..." />
                          <button type="submit" className="search-submit">
                            <i className="material-icons">search</i>
                          </button>
                        </form>
                      </div>
                      <div className="ads-widget widget">
                        <a href="#">
                          <img src="./assets/upload/blog/ad-banner.jpg" alt="" />
                        </a>
                      </div>
                      <div className="category-widget widget">
                        <h2>Categories</h2>
                        <ul className="category-list">
                          <li><a href="#">Academics</a></li>
                          <li><a href="#">Advertisement</a></li>
                          <li><a href="#">Business</a></li>
                          <li><a href="#">Campus Life</a></li>
                          <li><a href="#">Design</a></li>
                          <li><a href="#">Government</a></li>
                          <li><a href="#">Schools</a></li>
                          <li><a href="#">Uncategorized</a></li>
                        </ul>
                      </div>
                      <div className="tags-widget widget">
                        <h2>Tags</h2>
                        <ul className="tags-list">
                          <li><a href="#">codebean</a></li>
                          <li><a href="#">course</a></li>
                          <li><a href="#">parents</a></li>
                          <li><a href="#">schools</a></li>
                          <li><a href="#">students</a></li>
                          <li><a href="#">teacher</a></li>
                          <li><a href="#">theme</a></li>
                          <li><a href="#">wordpress</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End blog section */}
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