import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import addItems from '../../redux/actions/addItems';
import Header from '../../shared/Header';
import {Link, useParams} from 'react-router-dom';

const CourseDetails = props => {
  const [courseData, setCourseData] = useState ('');
  const [videoIndex, setIndex] = useState (0);
  const {id} = useParams ();

  useEffect (() => {
    fetch (`/allcourseslist/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        setCourseData (data);
      });
  }, []);

  return (
    <div id="container">
      <Header />
      {/* page-banner-section 
			================================================== */}
      <section className="page-banner-section">
        <div className="container">

          <h1>{courseData.course_name}</h1>

          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/allcourseslist">Courses</Link></li>
            <li>

              <Link to={'/allcourseslist/' + courseData._id}>
                {courseData.course_name}
              </Link>
            </li>
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
                          <a href="/SingleTeacher">
                            {courseData && courseData.teacher_name
                              ? courseData.teacher_name.name
                              : null}
                          </a>
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
                          <span>{courseData.category}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="course-single-gallery">

                    {(() => {
                      if (courseData.videos) {
                        return (
                          <video
                            id="videoPlayer"
                            width="780"
                            controls
                            controlsList="nodownload"
                            muted="muted"
                            autoplay={true}
                          >
                            <source
                              src={
                                'http://localhost:5000/video/' +
                                  (courseData && courseData.videos
                                    ? courseData.videos[videoIndex]
                                    : null)
                              }
                              type="video/mp4"
                            />
                          </video>
                        );
                      } else {
                        return;
                      }
                    }) ()}

                  </div>
                </div>
                {/* single course content */}
                <div className="single-course-content">
                  <h2>Learning Objectives</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="list">
                        {courseData.learning_objectives}
                      </ul>
                    </div>

                  </div>
                  <h2>Prior Knowledge</h2>
                  <p>
                    {courseData.pre_req}
                  </p>

                  {/* course section */}
                  <div className="course-section">

                    {(() => {
                      if (courseData.videos) {
                        return (
                          <div>

                            {courseData.videos.map ((element, index) => {
                              return (
                                <div
                                  className="panel-group"
                                  onClick={() => {
                                    setIndex (index);
                                  }}
                                >
                                  {console.log (index)}
                                  <div className="course-panel-heading">
                                    <div className="panel-heading-left">
                                      <div className="course-lesson-icon">
                                        <i className="fa fa-play-circle-o" />
                                      </div>
                                      <div className="title">
                                        <h4>
                                          {element}
                                          {' '}
                                          <span className="badge-item free">
                                            Play
                                          </span>
                                        </h4>
                                        <p className="subtitle">08:57</p>
                                      </div>
                                    </div>
                                    <div className="panel-heading-right">
                                      <div className="private-lesson">
                                        <i className="fa fa-book" />
                                        <span>
                                          Lesson {courseData.videos[videoIndex]}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}

                          </div>
                        );
                      } else {
                        return;
                      }
                    }) ()}

                  </div>
                  {/* end course section */}

                </div>
                {/* end single course content */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget course-widget">
                  <p className="price">
                    <span className="price-label">Price</span>
                    <span className="amount">
                      {/* <del>$39.99</del>  */}
                      ₹{courseData.price}
                    </span>
                  </p>
                  <Link
                    className="button-one"
                    to="/cart"
                    onClick={() => {
                      props.addItemHandler ({
                        product: courseData.course_name,
                        id: courseData._id,
                        price: courseData.price,
                        photo: courseData.course_photo,
                      });
                    }}
                  >
                    Take this course
                  </Link>
                  <div className="product-meta-info-list">
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">language</i>
                      </div>
                      <div className="value">
                        Language: {courseData.language}
                      </div>
                    </div>
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">access_time</i>
                      </div>
                      <div className="value">
                        {courseData.no_of_hours} hours on-demand video
                      </div>
                    </div>
                    {/* <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">playlist_add_check</i>
                      </div>
                      {/* <div className="value">
                         Lessons
                      </div> 
                  </div>*/}
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">spellcheck</i>
                      </div>
                      <div className="value">
                        Study Level: {courseData.study_level}
                      </div>
                    </div>
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">terrain</i>
                      </div>
                      <div className="value">

                        {(() => {
                          if (courseData.certificate) {
                            return 'Certificate of completion';
                          } else {
                            return <del>Certificate of completion</del>;
                          }
                        }) ()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget profile-widget">
                  <div className="top-part">
                    <img
                      src="./assets/upload/teachers/teacher4-thumb.jpg"
                      alt={
                        courseData && courseData.teacher_name
                          ? courseData.teacher_name.name
                          : null
                      }
                    />
                    <div className="name">
                      <span className="job-title">Math</span>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Donec tortor massa, dapibus sit amet massa ut, tincidunt dapibus neque. Morbi ac mauris lorem.
                    </p>
                    <a href="/SingleTeacher" className="text-link">
                      View full profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* End single-course section */}
    </div>
  );
};

// export default CourseDetails;

const mapStateToProps = state => {
  return {
    newState: state._cartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemHandler: item => dispatch (addItems (item)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (CourseDetails);
