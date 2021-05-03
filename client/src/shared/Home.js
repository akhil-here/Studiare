import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  const [courseData, setCourseData] = useState ([]);
  const [eventData, setEventData] = useState ([]);
  const [blogData, setBlogData] = useState ([]);
  const userrole = JSON.parse (localStorage.getItem ('user')).role;
  const username = JSON.parse (localStorage.getItem ('user')).name;

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
              <h1>Trending Course Collections</h1>
            </div>
            <div className="right-part">
              <Link to={'/allcourseslist'} className="button-one">
                View All Courses
              </Link>

            </div>
          </div>
          <div className="collection-box">
            <div className="row">
              {courseData.slice (0, 4).map (item => {
                return (
                  <div className="col-lg-3 col-md-6">
                    <div className="collection-post">
                      <div className="inner-collection">
                        <img src={item.course_photo} alt="" />
                        <Link
                          to={'/allcourses/' + item.category}
                          className="hover-post"
                        >
                          <span className="title">{item.category}</span>
                        </Link>
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
                    <h2 style={{marginTop: '1rem'}}>
                      Online Learn Courses Management
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-post">
                  <div className="icon-holder color2">
                    <i className="fa fa-id-card-o" />
                  </div>
                  <div className="feature-content">
                    <h2 style={{marginTop: '1rem'}}>
                      Learn from the masters of the field online
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-post">
                  <div className="icon-holder color3">
                    <i className="fa fa-handshake-o" />
                  </div>
                  <div className="feature-content">
                    <h2 style={{marginTop: '1rem'}}>
                      An Introduction-Skills For Learners
                    </h2>
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
              {(() => {
                if (userrole == 'Teacher') {
                  return (
                    <Link
                      to={'/createcourse'}
                      className="button-one btn waves-effect mr-2 "
                    >
                      Create Course
                    </Link>
                  );
                } else {
                  return;
                }
              }) ()}
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

                        <img src={item.course_photo} alt="" />

                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <Link to={'/allcourseslist/' + item._id}>
                              {item.course_name}
                            </Link>
                          </h2>
                          <div className="course-loop-teacher">
                            {item.teacher_name.name}
                          </div>
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
            <div className="col-lg-12">
              <div className="title-section">
                <div className="left-part">
                  <span>Events</span>
                  <h1>Upcoming Events</h1>
                </div>
                <div className="right-part">
                  {(() => {
                    if (userrole == 'Teacher') {
                      return (
                        <Link
                          to={'/createevent'}
                          className="button-one btn waves-effect mr-2 "
                        >
                          Create Event
                        </Link>
                      );
                    } else {
                      return;
                    }
                  }) ()}
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
                                {item.eventDate.substring (8, 10)}
                              </span>
                              <span className="date-month">
                                {MonthsEnum[item.eventDate.substring (5, 7)]}
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
                              <Link to={'/alleventslist/' + item._id}>
                                {item.eventName}
                              </Link>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* End events section */}

      {/* news-section 
    ================================================== */}
      <section className="collection-section">
        <div className="container">
          <div className="title-section">
            <div className="left-part">
              <span>Categories</span>
              <h1>Trending Blog Collections</h1>
            </div>
            {/* <div className="right-part">
              <Link to={'/allcourseslist'} className="button-one">
                View All Blogs
              </Link>

            </div> */}
          </div>
          <div className="collection-box">
            <div className="row">
              {blogData.slice (0, 4).map (item => {
                return (
                  <div className="col-lg-3 col-md-6">
                    <div className="collection-post">
                      <div className="inner-collection">
                        <img src={item.blog_photo} alt="" />
                        <Link
                          to={'/allblogs/' + item.category}
                          className="hover-post"
                        >
                          <span className="title">{item.category}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <section className="news-section">
          <div className="container">
            <div className="title-section">
              <div className="left-part">
                <span>Blog</span>
                <h1>Latest Blogs</h1>
              </div>
              <div className="right-part">
                {(() => {
                  if (userrole == 'Teacher') {
                    return (
                      <Link
                        to={'/createblog'}
                        className="button-one btn waves-effect mr-2 "
                      >
                        Create Blog
                      </Link>
                    );
                  } else {
                    return;
                  }
                }) ()}
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

                        <img src={item.blog_photo} alt="" />

                        <div className="post-content">
                          {item.category}
                          <h2>
                            <Link to={`/allblogslist/` + item._id}>
                              {item.blogName}
                            </Link>
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
      </section>
      <Footer />
      {/* End testimonial section */}
    </div>
  );
};

export default Home;
