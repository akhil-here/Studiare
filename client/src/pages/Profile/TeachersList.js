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
        setTeacherData (result.users);
      });
  }, []);
  console.log (teacherData);

  useEffect (
    () => {
      if (teacherData) {
        teacherData.map (item => {
          fetch (`/teacher/` + item._id, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
            },
          })
            .then (res => res.json ())
            .then (data => {
              setSingleTeacherData (data);
            });
        });
      }
    },
    [teacherData]
  );
  console.log (singleteacherData);

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
              {(() => {
                console.log (teacherData.length);
                console.log (singleteacherData.length);
                for (let i = 0; i < teacherData.length; i++) {
                  return (
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <Link to={`/teacher/` + teacherData[i]._id}>
                          <img
                            src={
                              singleteacherData[i] &&
                                singleteacherData[i].profile_photo
                                ? singleteacherData[i].profile_photo
                                : null
                            }
                            alt=""
                          />
                          <div className="hover-post">
                            <h2>{teacherData[i].name}</h2>
                            <span>{teacherData[i].email}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                }
              }) ()};

            </div>
          </div>
        </div>
      </section>
      {/* End teachers section */}
    </div>
  );
};

export default TeachersList;
