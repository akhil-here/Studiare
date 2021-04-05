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
            <h1>Distance Learning MBA Management</h1>
            <ul className="page-depth">
              <li><a href="index.html">Studiare</a></li>
              <li><a href="courses.html">Courses</a></li>
              <li><a href="single-course.html">Distance Learning MBA Management</a></li>
            </ul>
          </div>
        </section>
        {/* End page-banner-section */}
        {/* single-course-section 
			================================================== */}
        <section className="single-course-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-course-box">
                  {/* single top part */}
                  <div className="product-single-top-part">
                    <div className="product-info-before-gallery">
                      <div className="course-author before-gallery-unit">
                        <div className="icon">
                          <i className="material-icons">account_box</i>
                        </div>
                        <div className="info">
                          <span className="label">Teacher</span>
                          <div className="value">
                            <a href="single-teacher.html">Michael Arnett</a>
                          </div>
                        </div>
                      </div>
                      <div className="course-category before-gallery-unit">
                        <div className="icon">
                          <i className="material-icons">bookmark_border</i>
                        </div>
                        <div className="info">
                          <span className="label">Category</span>
                          <div className="value">
                            <a href="#">Design <span>/</span></a>
                            <a href="#">Web Design</a>
                          </div>
                        </div>
                      </div>
                      <div className="course-rating before-gallery-unit">
                        <div className="star-rating has-ratings">
                          <span className="rating">4.50</span>
                          <span className="votes-number">2 Votes</span>
                        </div>
                      </div>
                    </div>
                    <div className="course-single-gallery">
                      <img src="./assets/upload/courses/4.jpg" alt="" />
                    </div>
                  </div>
                  {/* single course content */}
                  <div className="single-course-content">
                    <h2>What Will I Learn?</h2>
                    <p>Improve your productivity, get things done, and find more time for what’s most important with Time Management Tips. This weekly series provides actionable time management techniques to help people better manage their time and ultimately become more productive. Time management expert Dave Crenshaw provides a new tip every Monday, touching on a wide variety of topics. Tune in to learn about everything from managing emails and calendars to setting priorities, collaborating with coworkers, reducing interruptions, crafting a “productivity mindset,” and creating a more comfortable and effective work environment.</p>
                    <h2>Learning Objectives</h2>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list">
                          <li>Lorem ipsum dolor sit amet, consectetur</li>
                          <li>Nullam condimentum metus quis magna egestas</li>
                          <li>Mauris lobortis metus in pharetra posuere</li>
                          <li>Suspendisse sed est luctus nibh tempor</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list">
                          <li>Nullam condimentum metus quis magna egestas</li>
                          <li>Mauris lobortis metus in pharetra posuere</li>
                          <li>Suspendisse sed est luctus nibh tempor</li>
                        </ul>
                      </div>
                    </div>
                    <h2>Prior Knowledge</h2>
                    <p>Improve your productivity, get things done, and find more time for what’s most important with Time Management Tips. This weekly series provides actionable time management techniques to help people better manage their time and ultimately become more productive. Time management expert Dave Crenshaw provides a new tip every Monday, touching on a wide variety of topics.</p>
                    {/* course section */}
                    <div className="course-section">
                      <h3>1. Introduction</h3>
                      <div className="panel-group">
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon">
                              <i className="fa fa-play-circle-o" />
                            </div>
                            <div className="title">
                              <h4>1.1 Introduction <span className="badge-item video">video</span>
                              </h4>
                              <p className="subtitle">01:10</p>
                            </div>
                          </div>
                          <div className="panel-heading-right">
                            <a className="video-lesson-preview preview-button" href="https://www.youtube.com/watch?v=4BJY-bgHqtI">
                              <i className="fa fa-play-circle" />Preview
                            </a>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner">
                            Welcome to How to Customize a Logo Sting! In this course you’ll learn how to take a basic After Effects sting logo treatment and customise it to work for your brand. Are you new to After Effects? No worries! This course is designed for people who are new to After Effects or have never used it!
                          </div>
                        </div>
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon">
                              <i className="fa fa-files-o" />
                            </div>
                            <div className="title">
                              <h4>Project Files<span className="badge-item practice">practice</span></h4>
                              <p className="subtitle">Accessing the project files</p>
                            </div>
                          </div>
                          <div className="panel-heading-right">
                            <div className="private-lesson">
                              <i className="fa fa-lock" />
                              <span>Private</span>
                            </div>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner">
                            This lesson is private, for full access to all lessons you need to buy this course.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end course section */}
                    {/* course section */}
                    <div className="course-section">
                      <h3>2. Getting Started</h3>
                      <div className="panel-group">
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon"> 
                              <i className="fa fa-play-circle-o" />
                            </div>
                            <div className="title">
                              <h4>2.1 After Effects Tour <span className="badge-item free">free</span></h4>
                              <p className="subtitle">Quick tour of the After Effects interface</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner"> In this lesson you are going to open up the project, get a quick tour of the After Effects interface, and learn how the project is organized. After Effects is a massive application, but this lesson is only going to focus on what you need to know to work with this logo sting project!</div>
                        </div>
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon">
                              <i className="fa fa-play-circle-o" />
                            </div>
                            <div className="title">
                              <h4>2.2 Layers, Comps, and Precomps</h4>
                              <p className="subtitle">08:57</p>
                            </div>
                          </div>
                          <div className="panel-heading-right">
                            <div className="private-lesson">
                              <i className="fa fa-lock" /><span>Private</span>
                            </div>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner"> This lesson is private, for full access to all lessons you need to buy this course.</div>
                        </div>
                      </div>
                    </div>
                    {/* end course section */}
                    {/* course section*/}
                    <div className="course-section">
                      <h3>3. Customize!</h3>
                      <div className="panel-group">
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon">
                              <i className="fa fa-download" />
                            </div>
                            <div className="title">
                              <h4>3.1 Logo Replacement <span className="badge-item lecture">lecture</span></h4>
                              <p className="subtitle">14:40</p>
                            </div>
                          </div>
                          <div className="panel-heading-right">
                            <div className="private-lesson">
                              <i className="fa fa-lock" />
                              <span>Private</span>
                            </div>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner"> This lesson is private, for full access to all lessons you need to buy this course.</div>
                        </div>
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon">
                              <i className="fa fa-play-circle-o" />
                            </div>
                            <div className="title">
                              <h4>3.2 Color Tweaks</h4>
                              <p className="subtitle">03:54</p>
                            </div>
                          </div>
                          <div className="panel-heading-right">
                            <a className="video-lesson-preview preview-button" href="https://www.youtube.com/watch?v=4BJY-bgHqtI">
                              <i className="fa fa-play-circle" />Preview
                            </a>
                            <div className="private-lesson">
                              <i className="fa fa-lock" />
                              <span>Private</span>
                            </div>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner"> This lesson is private, for full access to all lessons you need to buy this course.</div>
                        </div>
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon">
                              <i className="fa fa-play-circle-o" />
                            </div>
                            <div className="title">
                              <h4>3.3 Adding Music <span className="badge-item video">video</span></h4>
                              <p className="subtitle">09:13</p>
                            </div>
                          </div>
                          <div className="panel-heading-right">
                            <div className="private-lesson">
                              <i className="fa fa-lock" />
                              <span>Private</span>
                            </div>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner"> This lesson is private, for full access to all lessons you need to buy this course.</div>
                        </div>
                      </div>
                    </div>
                    {/* end course section */}
                    {/* course section*/}
                    <div className="course-section">
                      <h3>4. Wrapping Up</h3>
                      <div className="panel-group">
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon">
                              <i className="fa fa-question-circle" />
                            </div>
                            <div className="title">
                              <h4>4.1 Export &amp; Practice <span className="badge-item quiz">quiz</span></h4>
                              <p className="subtitle">Course quiz</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner"> Now you have your logo sting modified with your logo and a short musical sting, you need to get it out of After Effects so you can use it in other projects. In this lesson you’ll learn how to setup a render and export your video!</div>
                        </div>
                        <div className="course-panel-heading">
                          <div className="panel-heading-left">
                            <div className="course-lesson-icon">
                              <i className="fa fa-trophy" />
                            </div>
                            <div className="title">
                              <h4>4.2 Conclusion</h4>
                              <p className="subtitle">03:17</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel-content">
                          <div className="panel-content-inner"> Congratulations on customizing this logo sting and exporting it out of After Effects! In this last lesson I will share some tips and ideas for even more customization!</div>
                        </div>
                      </div>
                    </div>
                    {/* end course section */}
                  </div>
                  {/* end single course content */}
                  {/* course reviews */}
                  <div className="course-reviews">
                    <div className="course-review-title">
                      <h3>
                        <i className="material-icons">chat_bubble_outline</i>
                        Student Reviews
                      </h3>
                    </div>
                    <div className="course-reviews-inner">
                      <div className="ratings-box">
                        <div className="rating-average">
                          <p>Average rating</p>
                          <div className="average-box">
                            <span className="num">4.5</span>
                            <span className="ratings">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                            </span>
                            <span className="txt">2 Ratings</span>
                          </div>
                        </div>
                        <div className="detailed-rating">
                          <p>Detailed Rating</p>
                          <div className="detailed-box">
                            <ul className="detailed-lines">
                              <li>
                                <span>5 Stars</span>
                                <div className="outer">
                                  <span className="inner-fill" style={{width: '50%'}} />
                                </div>
                                <span>1</span>
                              </li>
                              <li>
                                <span>4 Stars</span>
                                <div className="outer">
                                  <span className="inner-fill" style={{width: '50%'}} />
                                </div>
                                <span>1</span>
                              </li>
                              <li>
                                <span>3 Stars</span>
                                <div className="outer">
                                  <span className="inner-fill" />
                                </div>
                                <span>0</span>
                              </li>
                              <li>
                                <span>2 Stars</span>
                                <div className="outer">
                                  <span className="inner-fill" />
                                </div>
                                <span>0</span>
                              </li>
                              <li>
                                <span>1 Stars</span>
                                <div className="outer">
                                  <span className="inner-fill" />
                                </div>
                                <span>0</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <ul className="comments">
                        <li>
                          <div className="image-holder">
                            <img src="./assets/upload/blog/avatar4.jpg" alt="" />
                          </div>
                          <div className="comment-content">
                            <h2>
                              Steven Smith
                              <span className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                              </span>
                            </h2>
                            <p>top design</p>
                          </div>
                        </li>
                        <li>
                          <div className="image-holder">
                            <img src="./assets/upload/blog/avatar4.jpg" alt="" />
                          </div>
                          <div className="comment-content">
                            <h2>
                              Margaret
                              <span className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </span>
                            </h2>
                            <p>Easy to install, reasonable price!</p>
                          </div>
                        </li>
                      </ul>
                      <form className="add-review">
                        <h1>Add a Review</h1>
                        <label>Your rating</label>
                        <select>
                          <option>Rate...</option>
                          <option>Perfect</option>
                          <option>Good</option>
                          <option>Average</option>
                          <option>Not that bad</option>
                          <option>Very Poor</option>
                        </select>
                        <label>Your Review</label>
                        <textarea defaultValue={""} />
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                  {/* end course reviews */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="widget course-widget">
                    <p className="price">
                      <span className="price-label">Price</span>
                      <span className="amount"><del>$39.99</del> $29.99</span>
                    </p>
                    <a className="button-one" href="#">Take this course</a>
                    <div className="product-meta-info-list">
                      <h3>Course Features</h3>
                      <div className="meta-info-unit">
                        <div className="icon">
                          <i className="material-icons">language</i>
                        </div>
                        <div className="value">Language: English</div>
                      </div>
                      <div className="meta-info-unit">
                        <div className="icon">
                          <i className="material-icons">access_time</i>
                        </div>
                        <div className="value">7 hours on-demand video</div>
                      </div>
                      <div className="meta-info-unit">
                        <div className="icon">
                          <i className="material-icons">playlist_add_check</i>
                        </div>
                        <div className="value">11 Lessons</div>
                      </div>
                      <div className="meta-info-unit">
                        <div className="icon">
                          <i className="material-icons">spellcheck</i>
                        </div>
                        <div className="value">Study Level: Intermediate</div>
                      </div>
                      <div className="meta-info-unit">
                        <div className="icon">
                          <i className="material-icons">terrain</i>
                        </div>
                        <div className="value">Certificate of Completion</div>
                      </div>
                    </div>
                    <ul className="share-list">
                      <li><span>Share:</span></li>
                      <li><a href="#" className="facebook"><i className="fa fa-facebook-f" /></a></li>
                      <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>
                      <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                  <div className="widget profile-widget">
                    <div className="top-part">
                      <img src="./assets/upload/teachers/teacher4-thumb.jpg" alt="Leslie Williams" />
                      <div className="name">
                        <h3>Leslie Williams</h3>
                        <span className="job-title">Math</span>
                      </div>
                    </div>
                    <div className="content">
                      <p>Donec tortor massa, dapibus sit amet massa ut, tincidunt dapibus neque. Morbi ac mauris lorem.</p>
                      <a href="single-teacher.html" className="text-link">View full profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End single-course section */}
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