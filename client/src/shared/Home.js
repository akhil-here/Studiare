import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const Home = () => {
  const [courseData, setCourseData] = useState ([]);
  const [eventData, setEventData] = useState ([]);
  const [blogData, setBlogData] = useState ([]);

  const MonthsEnum = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  };

  useEffect (() => {
    fetch ('/allcourses', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        setCourseData (result.courses);
      });
    fetch ('/allevents', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        setEventData (result.events);
      });
    fetch ('/allblogs', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        setBlogData (result.blogs);
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
              <Link to={'/allcourseslist'} className="button-one">
                View All Courses
              </Link>

            </div>
          </div>
          <div className="collection-box">
            <div className="row">
              {courseData.slice (0, courseData.length).map (item => {
                return (
                  <div className="col-lg-3 col-md-6">
                    <div className="collection-post">
                      <div className="inner-collection">
                        <img src={item.course_photo} alt="" />
                        <a href="#" className="hover-post">
                          <span className="title">{item.category}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              <h1>Popular Courses</h1>
            </div>
            <div className="right-part">
              <Link to={'/allcourseslist'} className="button-one">
                View All Courses
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="popular-courses-box">
            {' '}
            <div className="row">
              {courseData.slice (0, 4).map (item => {
                return (
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
                            <span>{item.no_of_students}</span>
                          </div>
                          <div className="course-price">
                            <span>₹{item.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                <div className="right-part">
                  <Link to={'/alleventslist'} className="button-one">
                    View All events
                  </Link>
                </div>
              </div>
              <div className="events-box">
                {eventData.slice (0, 3).map (item => {
                  return (
                    <div className="events-post">
                      <div className="event-inner-content">
                        <div className="top-part">
                          <div className="date-holder">
                            <div className="date">
                              <span className="date-day">
                                {item.date.substring (5, 7)}
                              </span>
                              <span className="date-month">
                                {MonthsEnum[item.date.substring (5, 7)]}
                              </span>
                            </div>
                          </div>
                          <div className="content">
                            <div className="event-meta">
                              <span className="event-meta-piece start-time">
                                <i className="material-icons">access_time</i>
                                {' '}
                                {item.timefrom}hrs - {item.timeto}hrs
                              </span>
                              <span className="event-meta-piece location">
                                <i className="material-icons">location_on</i>
                                {' '}
                                {item.location}
                              </span>
                            </div>
                            <h2 className="title">
                              <a href="#">
                                {item.eventName}
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
      {/* <section className="countdown-section">
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
      </section> */}
      {/* End countdown section */}
      {/* news-section 
    ================================================== */}
      <section className="news-section">
        <div className="container">
          <div className="title-section">
            <div className="left-part">
              <span>Blog</span>
              <h1>Latest Blogs</h1>
            </div>
            <div className="right-part">
              <Link className="button-one" to="/allblogslist">
                View All Blogs
              </Link>
            </div>
          </div>

          <div className="news-box">
            <div className="row">
              {blogData.slice (0, 4).map (item => {
                return (
                  <div className="col-lg-3 col-md-6">
                    <div className="blog-post">
                      <a href="/">
                        <img src={item.blog_photo} alt="" />
                      </a>
                      <div className="post-content">
                        <a className="category" href="#">{item.category}</a>
                        <h2>
                          <a href="/SinglePost">
                            {item.blogName}
                          </a>
                        </h2>
                        <div className="post-meta date">
                          <i className="material-icons">access_time</i>
                          {' '}
                          {item.publishDate.substring (0, 10)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

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
