import React, {useState, useEffect} from 'react';
import Header from '../../shared/Header';
import {Link} from 'react-router-dom';

const TeachersList = () => {
  const [teacherData, setTeacherData] = useState ([]);
  const [singleteacherData, setSingleTeacherData] = useState ([]);
  useEffect (() => {
    fetch ('/teacherslist', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result.users);
        setTeacherData (result.users);
      });
    fetch (`/teacher/` + teacherData._id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        setSingleTeacherData (data);
      });
  }, []);
  return (
    <div id="container">
      <Header />
      {/* page-banner-section 
                ================================================== */}
      <section className="page-banner-section">
        <div className="container">
          <h1>Teachers</h1>
          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/teacherslist">Teachers</Link></li>
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
              {teacherData.map (item => {
                {
                  (() => {
                    if (item._id == singleteacherData.teacher_name) {
                      return (
                        <div className="col-lg-3 col-md-6">
                          <div className="teacher-post">
                            <Link to={`/teacher/` + item._id}>
                              <img
                                src={singleteacherData.profile_photo}
                                alt=""
                              />
                              <div className="hover-post">
                                <h2>{item.name}</h2>
                                <span>{item.email}</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      );
                    } else {
                      return;
                    }
                  }) ();
                }
                return (
                  <div className="col-lg-3 col-md-6">
                    <div className="teacher-post">
                      <Link to={`/teacher/` + item._id}>
                        <img
                          src="./assets/upload/teachers/teacher6.jpg"
                          alt=""
                        />
                        <div className="hover-post">
                          <h2>{item.name}</h2>
                          <span>{item.email}</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* End teachers section */}
    </div>
  );
};

export default TeachersList;
