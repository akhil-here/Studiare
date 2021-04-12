import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const Home = () => {
  const [data, setData] = useState ([]);
  useEffect (() => {
    fetch ('/allcourses', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        // console.log (result);
        setData (result.posts);
      })
      .catch (err => {
        console.log (err);
      });
  }, []);
  return (
    <div id="container">
      <Header />
      {/* collection-section 
    ================================================== */}
      <section className="collection-section">
        <div className="container">
          <div className="title-section">
            <div className="left-part">
              <span>Categories</span>
              <h1>Trending Collection</h1>
            </div>
            <div className="right-part">
              <Link to="/Courses">View All Courses</Link>
            </div>
          </div>
          <div className="collection-box">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="collection-post">
                  <div className="inner-collection">
                    <img
                      src="./assets/upload/collection/web-development.jpg"
                      alt=""
                    />
                    <a href="#" className="hover-post">
                      <span className="title">Web Development</span>
                      <span className="numb-courses">3 Courses</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="collection-post">
                  <div className="inner-collection">
                    <img
                      src="./assets/upload/collection/web-design.jpg"
                      alt=""
                    />
                    <a href="#" className="hover-post">
                      <span className="title">Web Design</span>
                      <span className="numb-courses">2 Courses</span>
                    </a>
                  </div>
                </div>
                <div className="collection-post">
                  <div className="inner-collection">
                    <img
                      src="./assets/upload/collection/technology.jpg"
                      alt=""
                    />
                    <a href="#" className="hover-post">
                      <span className="title">Technology</span>
                      <span className="numb-courses">3 Courses</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="collection-post">
                  <div className="inner-collection">
                    <img
                      src="./assets/upload/collection/photography.jpg"
                      alt=""
                    />
                    <a href="#" className="hover-post">
                      <span className="title">Photography</span>
                      <span className="numb-courses">3 Courses</span>
                    </a>
                  </div>
                </div>
                <div className="collection-post">
                  <div className="inner-collection">
                    <img src="./assets/upload/collection/design.jpg" alt="" />
                    <a href="#" className="hover-post">
                      <span className="title">Design</span>
                      <span className="numb-courses">3 Courses</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End collection section */}
      {/* feature-section 
    ================================================== */}
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
                    <p>
                      Analyzing negative materials about your brand and addressing them with sentiment analysis and press.
                    </p>
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
                    <p>
                      Analyzing negative materials about your brand and addressing them with sentiment analysis and press.
                    </p>
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
                    <p>
                      Analyzing negative materials about your brand and addressing them with sentiment analysis and press.
                    </p>
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
              <Link to={'/Courses'} className="button-one" href="#">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
        {data.map (item => {
          return (
            <div className="container">
              <div className="popular-courses-box">
                {' '}
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="/">
                          <img src={item.course_photo} alt="" />
                        </a>
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="/">{item.course_name}</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div
                              className="star-rating has-ratings"
                              title="Rated 5.00 out of 5"
                            >
                              <span style={{width: '100%'}}>
                                <span className="rating">5.00</span>
                                <span className="votes-number">1 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">
                              {item.teacher_name.name}
                            </a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>64</span>
                          </div>
                          <div className="course-price">
                            <span>£{item.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

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
                            <i className="material-icons">access_time</i>
                            {' '}
                            6:00 am - 12:00 pm
                          </span>
                          <span className="event-meta-piece location">
                            <i className="material-icons">location_on</i>
                            {' '}
                            New York , US of America
                          </span>
                        </div>
                        <h2 className="title">
                          <a href="#">
                            Summer High School Journalism Camp Registration Form
                          </a>
                        </h2>
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
                            <i className="material-icons">access_time</i>
                            {' '}
                            2:00 am - 5:00 am
                          </span>
                          <span className="event-meta-piece location">
                            <i className="material-icons">location_on</i>
                            {' '}
                            New York , US of America
                          </span>
                        </div>
                        <h2 className="title">
                          <a href="#">
                            Board of Regents Campus Live and Community Forum
                          </a>
                        </h2>
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
                            <i className="material-icons">access_time</i>
                            {' '}
                            2:00 am - 8:00 am
                          </span>
                          <span className="event-meta-piece location">
                            <i className="material-icons">location_on</i>
                            {' '}
                            New York , US of America
                          </span>
                        </div>
                        <h2 className="title">
                          <a href="#">
                            May Professional Development Diversity and Inclusion Series
                          </a>
                        </h2>
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
                  <a className="video-link iframe" href="/">
                    <span><i className="fa fa-play" /></span>
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="video-post small-post">
                      <img
                        src="./assets/upload/video/video-poster-2.jpg"
                        alt=""
                      />
                      <div className="hover-post">
                        <h2>Limitless learning</h2>
                      </div>
                      <a className="video-link iframe" href="/">
                        <span><i className="fa fa-play" /></span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="video-post small-post">
                      <img
                        src="./assets/upload/video/video-poster-3.jpg"
                        alt=""
                      />
                      <div className="hover-post">
                        <h2>Learn by Doing</h2>
                      </div>
                      <a className="video-link iframe" href="/">
                        <span><i className="fa fa-play" /></span>
                      </a>
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
            <p>
              We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings.
            </p>
            <a className="button-two" href="#">Get my free book</a>
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
              <a className="button-one" href="#">View All Posts</a>
            </div>
          </div>

          <div className="news-box">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="blog-post">
                  <a href="/SinglePost">
                    <img src="./assets/upload/blog/blog-image-1.jpg" alt="" />
                  </a>
                  <div className="post-content">
                    <a className="category" href="#">Academics</a>
                    <h2>
                      <a href="/SinglePost">
                        Couple Of Happy College Students Graduated
                      </a>
                    </h2>
                    <div className="post-meta date">
                      <i className="material-icons">access_time</i>
                      {' '}
                      June 13, 2018
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
                  <p>
                    {' '}
                    “Design-driven, customized and reliable solution for your token development and management system to automate sales processes.”
                  </p>
                  <div className="profile-test">
                    <div className="avatar-holder">
                      <img
                        src="./assets/upload/testimonials/testimonial-avatar-1.jpg"
                        alt=""
                      />
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
                  <p>
                    {' '}
                    “Design-driven, customized and reliable solution for your token development and management system to automate sales processes.”
                  </p>
                  <div className="profile-test">
                    <div className="avatar-holder">
                      <img
                        src="./assets/upload/testimonials/testimonial-avatar-2.jpg"
                        alt=""
                      />
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
                  <p>
                    {' '}
                    “Design-driven, customized and reliable solution for your token development and management system to automate sales processes.”
                  </p>
                  <div className="profile-test">
                    <div className="avatar-holder">
                      <img
                        src="./assets/upload/testimonials/testimonial-avatar-3.jpg"
                        alt=""
                      />
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
                  <p>
                    {' '}
                    “Design-driven, customized and reliable solution for your token development and management system to automate sales processes.”
                  </p>
                  <div className="profile-test">
                    <div className="avatar-holder">
                      <img
                        src="./assets/upload/testimonials/testimonial-avatar-4.jpg"
                        alt=""
                      />
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
    </div>
  );
  // </Router>
};

export default Home;
