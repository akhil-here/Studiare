import React, {useState, useEffect} from 'react';
import Header from '../../shared/Header';
import {Link, useParams} from 'react-router-dom';

const SingleTeacher = () => {
  const [teacherData, setTeacherData] = useState ('');
  const [courseData, setCourseData] = useState ([]);
  const {id} = useParams ();
  useEffect (() => {
    fetch (`/teacher/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        setTeacherData (data);
      });
    fetch ('/allcourses', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result.courses);
        setCourseData (result.courses);
      });
  }, []);
  return (
    <div>

      {/* Container */}
      <div id="container">
        <Header />

        {/* page-banner-section 
			================================================== */}
        <section className="page-banner-section">
          <div className="container">
            <h1>
              {teacherData && teacherData.teacher_name
                ? teacherData.teacher_name.name
                : null}
            </h1>
            <ul className="page-depth">
              <li><Link to="/home">Studiare</Link></li>
              <li><Link to="/teacherslist">Teachers</Link></li>
              <li>
                <Link
                  to={
                    `/teacher/` +
                      (teacherData && teacherData.teacher_name
                        ? teacherData.teacher_name._id
                        : null)
                  }
                >
                  {teacherData && teacherData.teacher_name
                    ? teacherData.teacher_name.name
                    : null}
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* End page-banner-section */}
        {/* teachers-section 
			================================================== */}
        <section className="teachers-section">
          <div className="container">
            <div className="teachers-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="profile-image">
                    <div className="image-holder">
                      <img src={teacherData.profile_photo} alt="" />
                    </div>

                    <ul className="social-links">
                      <li>
                        <h2 style={{fontSize: '2rem'}}>
                          {teacherData && teacherData.teacher_name
                            ? teacherData.teacher_name.name
                            : null}
                        </h2>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="profile-details">
                    <h1>My details</h1>
                    <p>
                      {teacherData.about}
                      {/* Ullamcorper hendrerit odio. Nunc nec orci porttitor, suscipit nisi sed, rhoncus nisi. Maecenas laoreet enim sit amet elementum dapibus. */}
                    </p>
                    <div className="line-details">
                      <div className="detail-item">
                        <div className="icon-holder">
                          <i className="fa fa-external-link" />
                        </div>
                        <div className="detail-content">
                          <h2>Website:</h2>
                          <Link to={teacherData.website}>
                            {teacherData.website}
                          </Link>

                        </div>

                      </div>
                    </div>
                    <div className="line-details">

                      <div className="detail-item">
                        <div className="icon-holder">
                          <i className="fa fa-envelope-o" />
                        </div>
                        <div className="detail-content">
                          <h2>Email:</h2>
                          <Link
                            to={
                              teacherData && teacherData.teacher_name
                                ? teacherData.teacher_name.email
                                : null
                            }
                          >
                            {teacherData && teacherData.teacher_name
                              ? teacherData.teacher_name.email
                              : null}
                          </Link>
                        </div>
                      </div>

                    </div>
                    <div className="line-details">

                      <div className="detail-item">
                        <div className="icon-holder">
                          <i className="fa fa-mobile" />
                        </div>
                        <div className="detail-content">
                          <h2>Phone:</h2>
                          <span>{teacherData.phoneNo}</span>
                        </div>
                      </div>
                    </div>
                    <div className="line-details">

                      <div className="detail-item">
                        <div className="icon-holder">
                          <i className="fa fa-book" />
                        </div>
                        <div className="detail-content">
                          <h2>Subject</h2>
                          <span>{teacherData.subject}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="teacher-content">
                <h1>
                  Courses by
                  {' '}
                  {teacherData && teacherData.teacher_name
                    ? teacherData.teacher_name.name
                    : null}
                </h1>

                <div className="row">
                  {courseData.map (item => {
                    if (
                      item.teacher_name.name ==
                      (teacherData && teacherData.teacher_name
                        ? teacherData.teacher_name.name
                        : null)
                    ) {
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
                    }
                  })}
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};
export default SingleTeacher;
