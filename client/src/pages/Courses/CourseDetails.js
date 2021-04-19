import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import addItems from '../../redux/actions/addItems';
import Header from '../../shared/Header';
import {Link, useParams} from 'react-router-dom';

const CourseDetails = props => {
  const [courseData, setCourseData] = useState ('');
  const [userData, setUserData] = useState ('');
  const [singleteacherData, setSingleTeacherData] = useState ([]);
  const [videoIndex, setIndex] = useState (0);
  const username = JSON.parse (localStorage.getItem ('user')).name;
  const uid = JSON.parse (localStorage.getItem ('user'))._id;
  const {id} = useParams ();
  // const {videoname} = useParams();

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
    fetch (`/user/${uid}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        setUserData (data);
      });
  }, []);
  console.log (courseData);

  useEffect (
    () => {
      if (courseData) {
        fetch (`/teacher/` + courseData.teacher_name._id, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
          },
        })
          .then (res => res.json ())
          .then (data => {
            console.log (data);
            setSingleTeacherData (data);
          });
      }
    },
    [courseData]
  );

  const Videoplayer = () => {
    // if (!userData.coursesBought.includes (courseData._id)) {
    if (
      userData && userData.coursesBought && courseData.videos
        ? userData.coursesBought.includes (courseData._id)
        : false
    ) {
      //user has not bought this course
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
      return (
        <img src={courseData.course_photo} alt="" className="img-responsive" />
      );
    }
  };

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
                          <Link
                            to={
                              `/teacher/` +
                                (courseData && courseData.teacher_name
                                  ? courseData.teacher_name._id
                                  : null)
                            }
                          >
                            {courseData && courseData.teacher_name
                              ? courseData.teacher_name.name
                              : null}
                          </Link>
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
                          <Link to={`/allcourses/` + courseData.category}>
                            <span>{courseData.category}</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="course-single-gallery">
                    <Videoplayer />
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

                                      </div>
                                    </div>
                                    <div className="panel-heading-right">
                                      <div className="private-lesson">
                                        <i className="fa fa-lock" />
                                        <span>Lesson {index}</span>
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
                  {(() => {
                    if (
                      username == (courseData && courseData.teacher_name) ||
                      (userData && userData.coursesBought
                        ? userData.coursesBought.includes (courseData._id)
                        : false)
                    ) {
                      console.log (
                        username == (courseData && courseData.teacher_name)
                      );
                      console.log (
                        userData && userData.coursesBought
                          ? userData.coursesBought.includes (courseData._id)
                          : false
                      );
                      return;
                    } else {
                      console.log (
                        username == (courseData && courseData.teacher_name)
                      );
                      console.log (
                        userData && userData.coursesBought
                          ? userData.coursesBought.includes (courseData._id)
                          : false
                      );
                      return (
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
                      );
                    }
                  }) ()}

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
                  <span>Taught by:</span>
                  <div className="top-part">

                    <img
                      src={singleteacherData.profile_photo}
                      alt={
                        courseData && courseData.teacher_name
                          ? courseData.teacher_name.name
                          : null
                      }
                    />
                    <div className="name">
                      <span>
                        {courseData && courseData.teacher_name
                          ? courseData.teacher_name.name
                          : null}
                      </span>
                    </div>
                  </div>

                  <div className="content">
                    {/* <p>
                      Donec tortor massa, dapibus sit amet massa ut, tincidunt dapibus neque. Morbi ac mauris lorem.
                    </p> */}
                    <button
                      className="btn waves-effect shadow mt-2 "
                      type="submit"
                      style={{
                        backgroundColor: '#021140',
                        color: 'white',
                      }}
                    >
                      <Link
                        to={
                          `/teacher/` +
                            (courseData && courseData.teacher_name
                              ? courseData.teacher_name._id
                              : null)
                        }
                        className="text-link text-white"
                      >
                        View full profile
                      </Link>
                    </button>
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
