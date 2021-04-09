import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import create from '../images/createcourse.webp';
import {NotificationManager} from 'react-notifications';

const CreateCourse = () => {
  const history = useHistory ();
  const [category, setCategory] = useState ('');
  const [course_name, setCourseName] = useState ('');
  const [no_of_hours, setHours] = useState ('');
  const [price, setPrice] = useState ('');
  const [certificate, setCertificate] = useState ('');
  const [pre_req, setPre] = useState ('');
  const [learning_objectives, setLearning] = useState ('');
  const [course_photo, setImage] = useState ('');
  const [url, setUrl] = useState ('');

  useEffect (
    () => {
      if (url) {
        fetch ('/createcourse', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
          },
          body: JSON.stringify ({
            category,
            course_name,
            no_of_hours,
            price,
            certificate,
            pre_req,
            learning_objectives,
            course_photo: url,
          }),
        })
          .then (res => res.json ())
          .then (data => {
            if (data.error) {
              NotificationManager.error (data.error);
            } else {
              console.log (data);
              NotificationManager.success ('Created course successfully!!');
              history.push ('/home');
            }
          });
      }
    },
    [url]
  );

  const postDetails = () => {
    const data = new FormData ();
    data.append ('file', course_photo);
    data.append ('upload_preset', 'studiare');
    data.append ('cloud_name', 'studiare');
    fetch ('https://api.cloudinary.com/v1_1/studiare/image/upload', {
      method: 'post',
      body: data,
    })
      .then (res => res.json ())
      .then (data => {
        setUrl (data.url);
      })
      .catch (err => {
        console.log (err);
      });
  };

  return (
    <div>
      <div className="row d-flex mx-auto justify-content-center">
        <div className="col-xl-7 col-12 flex-column ">
          <img src={create} alt="Create course" className="position-fixed" />
        </div>
        <div className="col-xl-5 col-12 d-flex align-items-center justify-content-center flex-column">
          <div className="w-75">
            <div className="form-group">
              <h1
                className="font-weight-bold py-4 text-center"
                style={{
                  fontSize: '3rem',
                  color: '#201140',
                  letterSpacing: 1,
                }}
              >
                Create Course
              </h1>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Category{' '}
              </label>
              <input
                type="text"
                placeholder="Category goes here..."
                className="form-control border-0 shadow"
                value={category}
                onChange={e => setCategory (e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >

                Course name{' '}
              </label>
              <input
                type="text"
                placeholder="Course name goes here..."
                className="form-control border-0 shadow"
                value={course_name}
                onChange={e => setCourseName (e.target.value)}
              />

            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >

                Number of hours{' '}
              </label>
              <input
                type="number"
                placeholder="Number of hours goes here..."
                className="form-control border-0 shadow"
                value={no_of_hours}
                onChange={e => setHours (e.target.value)}
              />

            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >

                Price{' '}
              </label>
              <input
                type="number"
                placeholder="Price goes here..."
                className="form-control border-0 shadow"
                value={price}
                onChange={e => setPrice (e.target.value)}
              />

            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '.4rem',
                  fontWeight: 'bold',
                }}
              >
                Certificate of completion
              </label>
              <div className="row">
                <p className="col-md-6">
                  <label style={{color: 'black', fontSize: '1rem'}}>
                    <input
                      name="certificate"
                      type="radio"
                      value="Yes"
                      onChange={e => setCertificate (e.target.value)}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                </p>
                <p className="col-md-6">
                  <label style={{color: 'black', fontSize: '1rem'}}>
                    <input
                      name="certificate"
                      type="radio"
                      value="No"
                      onChange={e => setCertificate (e.target.value)}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',

                  fontWeight: 'bold',
                }}
              >

                Pre-requisites{' '}
              </label>
              <input
                type="text"
                placeholder="Pre-requisites goes here..."
                className="form-control border-0 shadow"
                value={pre_req}
                onChange={e => setPre (e.target.value)}
              />

            </div>

            <div className="form-group">

              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Learning Objectives{' '}
              </label>
              {' '}
              <input
                type="text"
                placeholder="Learning outcomes goes here.."
                className="form-control border-0 shadow"
                value={learning_objectives}
                onChange={e => setLearning (e.target.value)}
              />
            </div>

            <div className="form-group">

              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Upload image
              </label>
              <input
                type="file"
                className="form-control border-0 shadow"
                onChange={e => setImage (e.target.files[0])}
              />
            </div>
            <div className="row form-group align-items-center justify-content-center">

              <button
                className="btn waves-effect shadow mt-2 "
                style={{
                  backgroundColor: '#ffb037',
                  color: 'white',
                }}
                onClick={() => postDetails ()}
              >
                Create course{' '}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
