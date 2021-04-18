import React, {useState, useEffect} from 'react';
import Header from '../../shared/Header';
import {Link, useParams} from 'react-router-dom';

const SingleTeacher = () => {
  const [teacherData, setTeacherData] = useState ('');
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
                  </div>

                </div>
              </div>
              {/* <div className="teacher-content">
                <h1>Mission &amp; Biography</h1>
                <p>
                  Michael Main holds an QE in Theatre Practice and a PhD in Trafalgar Studios Theatre from London University. He is a Certified Teacher of stage combat with the BASSC, a fight examiner for Stage Combat and holds a black belt in Aikido. Michael has worked for many theatre companies including: the Orange Tree, Stephen Joseph Theatre, Royal &amp; Derngate, Crucible Theatre, Graeae.
                </p>
                <p>
                  He has directed several shows for East 15 – including a Martin Lynch premier and has also directed numerous productions for the Royal Armouries at the Tower of London. He was the fight arranger for the feature film The Roundabout and Assistant Fight Arranger on the feature, Faintheart. In what feels like a past life, he performed in Conquest, a series for the History Channel.
                </p>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="skills-box">
                      <h1>Skills</h1>
                      <div className="skill-line">
                        <span className="fill-text">Development 90%</span>
                        <span className="fill-box" style={{width: '90%'}} />
                      </div>
                      <div className="skill-line">
                        <span className="fill-text">Design 80%</span>
                        <span className="fill-box" style={{width: '80%'}} />
                      </div>
                      <div className="skill-line">
                        <span className="fill-text">Marketing 70%</span>
                        <span className="fill-box" style={{width: '70%'}} />
                      </div>
                      <div className="skill-line">
                        <span className="fill-text">
                          WordPress &amp; PHP 54%
                        </span>
                        <span className="fill-box" style={{width: '54%'}} />
                      </div>
                      <div className="skill-line">
                        <span className="fill-text">After Effects 94%</span>
                        <span className="fill-box" style={{width: '94%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <form className="contact-form">
                      <h1>Send a message</h1>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name*"
                      />
                      <input
                        name="mail"
                        id="mail"
                        type="text"
                        placeholder="E-mail*"
                      />
                      <textarea
                        name="comment"
                        id="comment"
                        placeholder="Message"
                        defaultValue={''}
                      />
                      <button type="submit" id="submit_contact">
                        Submit Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </section>

      </div>
      {/* End Container */}
    </div>
  );
};
export default SingleTeacher;
