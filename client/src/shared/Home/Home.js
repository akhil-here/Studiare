import React from 'react';
import Header from "../Header";
import Card from "./Card";

class Home extends React.Component{
    render(){
        return(    
      <div>
        <Header/>
      <section className="collection-section">
        <div className="container">
          <div className="title-section">
            <div className="left-part">
              <span>Categories</span>
              <h1>Trending Collection</h1>
            </div>
            <div className="right-part">
              <a className="button-one" href="/">View All Courses</a>
            </div>
          </div>
          <div className="collection-box">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                
                  <Card path="./assets/upload/collection/web-development.jpg" title="Web Development" count="3"/>
                
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="collection-post">
                  <div className="inner-collection">
                    <img src="./assets/upload/collection/web-design.jpg" alt="" />
                    <a href="/" className="hover-post">
                      <span className="title">Web Design</span>
                      <span className="numb-courses">2 Courses</span>
                    </a>
                  </div>
                </div>
                <div className="collection-post">
                  <div className="inner-collection">
                    <img src="./assets/upload/collection/technology.jpg" alt="" />
                    <a href="/" className="hover-post">
                      <span className="title">Technology</span>
                      <span className="numb-courses">3 Courses</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6">
                <div className="collection-post">
                  <div className="inner-collection">
                    <img src="./assets/upload/collection/photography.jpg" alt="" />
                    <a href="/" className="hover-post">
                      <span className="title">Photography</span>
                      <span className="numb-courses">3 Courses</span>
                    </a>
                  </div>
                </div>
                <div className="collection-post">
                  <div className="inner-collection">
                    <img src="./assets/upload/collection/design.jpg" alt="" />
                    <a href="/" className="hover-post">
                      <span className="title">Design</span>
                      <span className="numb-courses">3 Courses</span>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

        
      <section className="feature-section">
        <div className="container">
          <div className="feature-box">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="feature-post">
                  <div className="icon-holder">
                    <i className="fa fa-umbrella" />
                  </div>
                  <div className="feature-content">
                    <h2>
                      Online Learn Courses Management
                    </h2>
                    <p>Analyzing negative materials about your brand and addressing them with sentiment analysis and press.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-post">
                  <div className="icon-holder color2">
                    <i className="fa fa-id-card-o" />
                  </div>
                  <div className="feature-content">
                    <h2>
                      Learn from the masters of the field online
                    </h2>
                    <p>Analyzing negative materials about your brand and addressing them with sentiment analysis and press.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-post">
                  <div className="icon-holder color3">
                    <i className="fa fa-handshake-o" />
                  </div>
                  <div className="feature-content">
                    <h2>
                      An Introduction-Skills For Learners
                    </h2>
                    <p>Analyzing negative materials about your brand and addressing them with sentiment analysis and press.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End feature section */}
   
      {/* popular-courses-section 
    ================================================== */}
      <section className="popular-courses-section">
        <div className="container">
          <div className="title-section">
            <div className="left-part">
              <span>Education</span>
              <h1>Popular Courses</h1>
            </div>
            <div className="right-part">
              <a className="button-one" href="/">View All Courses</a>
            </div>
          </div>
          <div className="popular-courses-box">
            <div className="row">
              <div className="col-lg-3 col-md-6">
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
                        <a href="/" className="course-loop-teacher">Duha Samra</a>
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
              <div className="col-lg-3 col-md-6">
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
                        <a href="/" className="course-loop-teacher">Leon Redding</a>
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
              <div className="col-lg-3 col-md-6">
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
                        <a href="/" className="course-loop-teacher">Linda Castello</a>
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
              <div className="col-lg-3 col-md-6">
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
                        <a href="/" className="course-loop-teacher">Michael Arnett</a>
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
            </div>
          </div>
        </div>
      </section>
      {/* End popular-courses section */}
      {/* events-section 
    ================================================== */}
      <section className="events-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-section">
                <div className="left-part">
                  <span>Events</span>
                  <h1>Upcoming Events</h1>
                </div>
              </div>
              <div className="events-box">
                <div className="events-post">
                  <div className="event-inner-content">
                    <div className="top-part">
                      <div className="date-holder">
                        <div className="date">
                          <span className="date-day">22</span>
                          <span className="date-month">Oct</span>
                        </div>
                      </div>
                      <div className="content">
                        <div className="event-meta">
                          <span className="event-meta-piece start-time">
                            <i className="material-icons">access_time</i> 6:00 am - 12:00 pm
                          </span>
                          <span className="event-meta-piece location">
                            <i className="material-icons">location_on</i> New York , US of America
                          </span>
                        </div>
                        <h2 className="title"><a href="/">Summer High School Journalism Camp Registration Form</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="events-post">
                  <div className="event-inner-content">
                    <div className="top-part">
                      <div className="date-holder">
                        <div className="date">
                          <span className="date-day">14</span>
                          <span className="date-month">Dec</span>
                        </div>
                      </div>
                      <div className="content">
                        <div className="event-meta">
                          <span className="event-meta-piece start-time">
                            <i className="material-icons">access_time</i> 2:00 am - 5:00 am
                          </span>
                          <span className="event-meta-piece location">
                            <i className="material-icons">location_on</i> New York , US of America
                          </span>
                        </div>
                        <h2 className="title"><a href="/">Board of Regents Campus Live and Community Forum</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="events-post">
                  <div className="event-inner-content">
                    <div className="top-part">
                      <div className="date-holder">
                        <div className="date">
                          <span className="date-day">17</span>
                          <span className="date-month">Dec</span>
                        </div>
                      </div>
                      <div className="content">
                        <div className="event-meta">
                          <span className="event-meta-piece start-time">
                            <i className="material-icons">access_time</i> 2:00 am - 8:00 am
                          </span>
                          <span className="event-meta-piece location">
                            <i className="material-icons">location_on</i> New York , US of America
                          </span>
                        </div>
                        <h2 className="title"><a href="/">May Professional Development Diversity and Inclusion Series</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-section">
                <div className="left-part">
                  <span>Watch Video</span>
                  <h1>Learn Anywhere</h1>
                </div>
              </div>
              <div className="video-box">
                <div className="video-post">
                  <img src="./assets/upload/video/video-poster-1.jpg" alt="" />
                  <div className="hover-post">
                    <h2>Marketing, Media and Advertising</h2>
                    <p>About Studioare</p>
                  </div>
                  <a className="video-link iframe" href="https://vimeo.com/97447862"><span><i className="fa fa-play" /></span></a>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="video-post small-post">
                      <img src="./assets/upload/video/video-poster-2.jpg" alt="" />
                      <div className="hover-post">
                        <h2>Limitless learning</h2>
                      </div>
                      <a className="video-link iframe" href="https://vimeo.com/97447862"><span><i className="fa fa-play" /></span></a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="video-post small-post">
                      <img src="./assets/upload/video/video-poster-3.jpg" alt="" />
                      <div className="hover-post">
                        <h2>Learn by Doing</h2>
                      </div>
                      <a className="video-link iframe" href="https://vimeo.com/97447862"><span><i className="fa fa-play" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End events section */}
         {/* countdown-section 
    ================================================== */}
      <section className="countdown-section">
        <div className="container">
          <div className="countdown-box">
            <h1>Limited Time: Get My Book For Free!</h1>
            <p>Learn anytime, anywhere. Best Courses. Top Instituion.</p>
            <div className="countdown-item" data-date="2019/12/14">
              <div className="countdown-col">
                <span className="countdown-unit countdown-days">
                  <span className="number" id="days" />
                  <span className="text">days</span>
                </span>
              </div>
              <div className="countdown-col">
                <span className="countdown-unit countdown-hours">
                  <span className="number" id="hours" />
                  <span className="text">hours</span>
                </span>
              </div>
              <div className="countdown-col">
                <span className="countdown-unit countdown-min">
                  <span className="number" id="minutes" />
                  <span className="text">minutes</span>
                </span>
              </div>
              <div className="countdown-col">
                <span className="countdown-unit countdown-sec">
                  <span className="number" id="seconds" />
                  <span className="text">seconds</span>
                </span>
              </div>
            </div>
            <p>We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings.</p>
            <a className="button-two" href="/">Get my free book</a>
          </div>
        </div>
      </section>
      {/* End countdown section */}
      {/* news-section 
    ================================================== */}
      <section className="news-section">
        <div className="container">
          <div className="title-section">
            <div className="left-part">
              <span>Blog</span>
              <h1>Latest News</h1>
            </div>
            <div className="right-part">
              <a className="button-one" href="/">View All Posts</a>
            </div>
          </div>
          <div className="news-box">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="blog-post">
                  <a href="single-post.html"><img src="./assets/upload/blog/blog-image-1.jpg" alt="" /></a>
                  <div className="post-content">
                    <a className="category" href="/">Academics</a>
                    <h2><a href="single-post.html">Couple Of Happy College Students Graduated</a></h2>
                    <div className="post-meta date">
                      <i className="material-icons">access_time</i> June 13, 2018
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="blog-post">
                  <a href="single-post.html"><img src="./assets/upload/blog/blog-image-2.jpg" alt="" /></a>
                  <div className="post-content">
                    <a className="category" href="/">Government</a>
                    <h2><a href="single-post.html">Tips to Developing a Quality Discussion</a></h2>
                    <div className="post-meta date">
                      <i className="material-icons">access_time</i> June 13, 2018
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="blog-post">
                  <a href="single-post.html"><img src="./assets/upload/blog/blog-image-3.jpg" alt="" /></a>
                  <div className="post-content">
                    <a className="category" href="/">Design</a>
                    <h2><a href="single-post.html">Reflections for the Season of Advent</a></h2>
                    <div className="post-meta date">
                      <i className="material-icons">access_time</i> June 13, 2018
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="blog-post">
                  <a href="single-post.html"><img src="./assets/upload/blog/blog-image-4.jpg" alt="" /></a>
                  <div className="post-content">
                    <a className="category" href="/">Business</a>
                    <h2><a href="single-post.html">It’s Wonderful to see the Friendships that Develop</a></h2>
                    <div className="post-meta date">
                      <i className="material-icons">access_time</i> June 13, 2018
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End news section */}
      {/* testimonial-section 
    ================================================== */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-box owl-wrapper">
            <div className="owl-carousel" data-num={1}>
              <div className="item">
                <div className="testimonial-post">
                  <p> “Design-driven, customized and reliable solution for your token development and management system to automate sales processes.”</p>
                  <div className="profile-test">
                    <div className="avatar-holder">
                      <img src="./assets/upload/testimonials/testimonial-avatar-1.jpg" alt="" />
                    </div>
                    <div className="profile-data">
                      <h2>Nicole Alatorre</h2>
                      <p>Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-post">
                  <p> “Design-driven, customized and reliable solution for your token development and management system to automate sales processes.”</p>
                  <div className="profile-test">
                    <div className="avatar-holder">
                      <img src="./assets/upload/testimonials/testimonial-avatar-2.jpg" alt="" />
                    </div>
                    <div className="profile-data">
                      <h2>Nicole Alatorre</h2>
                      <p>Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-post">
                  <p> “Design-driven, customized and reliable solution for your token development and management system to automate sales processes.”</p>
                  <div className="profile-test">
                    <div className="avatar-holder">
                      <img src="./assets/upload/testimonials/testimonial-avatar-3.jpg" alt="" />
                    </div>
                    <div className="profile-data">
                      <h2>Nicole Alatorre</h2>
                      <p>Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-post">
                  <p> “Design-driven, customized and reliable solution for your token development and management system to automate sales processes.”</p>
                  <div className="profile-test">
                    <div className="avatar-holder">
                      <img src="./assets/upload/testimonials/testimonial-avatar-4.jpg" alt="" />
                    </div>
                    <div className="profile-data">
                      <h2>Nicole Alatorre</h2>
                      <p>Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End testimonial section */}
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
                    <li><a href="./assets/contact.html">Contact</a></li>
                    <li><a href="./assets/pricing.html">Pricing Packages</a></li>
                    <li><a href="./assets/about.html">About Us</a></li>
                    <li><a href="./assets/courses.html">Courses</a></li>
                    <li><a href="./assets/blog.html">News</a></li>
                    <li><a href="./assets/index.html">Home</a></li>
                    <li><a href="./assets//">Sample Page</a></li>
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
                  <li><a href="/" className="facebook"><i className="fa fa-facebook-f" /></a></li>
                  <li><a href="/" className="twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a href="/" className="google"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="/" className="linkedin"><i className="fa fa-linkedin" /></a></li>
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
export default Home;