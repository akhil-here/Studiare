import React, {useEffect, useState} from 'react';
import Header from '../../shared/Header';
import {Link} from 'react-router-dom';

const Courses = () => {
  const [courseData, setCourseData] = useState ([]);

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
  }, []);
  return (
    <div id="container">
      {/* Header
		    ================================================== */}
      <Header />
      <section className="page-banner-section">
        <div className="container">
          <h1>Courses</h1>
          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/allcourseslist">Courses</Link></li>
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
                  <span>
                    Showing all
                    {' '}
                    {courseData.length}
                    {' '}
                    results
                  </span>
                </div>
              </div>

              <div className="row">
                {courseData.map (item => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6">
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

                              {item.teacher_name.name}

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
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="category-widget widget">
                  <h2>Product categories</h2>

                  <ul className="category-list">
                    {courseData.map (item => {
                      return <li>{item.category}</li>;
                    })}
                  </ul>
                </div>
                <div className="products-widget widget">
                  <h2>Products</h2>
                  <ul className="products-list">
                    {courseData.map (item => {
                      return (
                        <li>
                          <a href="single-course.html">
                            <img
                              src={item.course_photo}
                              className="w-20 h-20"
                              alt=""
                            />
                          </a>
                          <div className="list-content">
                            <h3>
                              <a href="single-course.html">
                                {item.course_name}
                              </a>
                            </h3>
                            <span>₹{item.price}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
