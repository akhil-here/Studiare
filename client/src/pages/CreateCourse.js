import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import create from '../images/createcourse.webp';
import {NotificationManager} from 'react-notifications';

class CreateCourse extends Component {
  constructor (props) {
    super (props);

    this.state = {
      loading: true,
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState ({[e.target.name]: e.target.value});
  };

  componentDidMount () {
    this.setState ({loading: false});
  }

  handleSubmit = e => {
    e.preventDefault ();
    this.setState ({loading: true}, () => {
      NotificationManager.info ('Checking your info');
      // auth
      //   .signInWithEmailAndPassword (this.state.email, this.state.password)
      //   .then (({user}) => {
      //     // check from backend
      //     NotificationManager.success (`Welcome ${user.email}`);
      //   })
      //   .catch (er => {
      //     NotificationManager.error (er.message);
      //   });
    });
  };
  render () {
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
                  // value={email}
                  // onChange={e => setEmail (e.target.value)}
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
                  placeholder="Couese name goes here..."
                  className="form-control border-0 shadow"
                  // value={email}
                  // onChange={e => setEmail (e.target.value)}
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

                  Name of teacher{' '}
                </label>
                <input
                  type="text"
                  placeholder="Name of the teacher goes here..."
                  className="form-control border-0 shadow"
                  // value={email}
                  // onChange={e => setEmail (e.target.value)}
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

                  Number of sudents{' '}
                </label>
                <input
                  type="number"
                  placeholder="No. of students goes here..."
                  className="form-control border-0 shadow"
                  // value={email}
                  // onChange={e => setEmail (e.target.value)}
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

                  Votes{' '}
                </label>
                <input
                  type="number"
                  placeholder="Number of votes goes here..."
                  className="form-control border-0 shadow"
                  // value={email}
                  // onChange={e => setEmail (e.target.value)}
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
                  // value={email}
                  // onChange={e => setEmail (e.target.value)}
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
                  // value={email}
                  // onChange={e => setEmail (e.target.value)}
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
                        name="role"
                        type="radio"
                        value="Yes"
                        // onChange={e => setRole (e.target.value)}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                  </p>
                  <p className="col-md-6">
                    <label style={{color: 'black', fontSize: '1rem'}}>
                      <input
                        name="role"
                        type="radio"
                        value="No"
                        // onChange={e => setRole (e.target.value)}
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
                    marginTop: '1rem',
                    fontWeight: 'bold',
                  }}
                >

                  Pre-requisites{' '}
                </label>
                <input
                  type="text"
                  placeholder="Pre-requisites goes here..."
                  className="form-control border-0 shadow"
                  // value={email}
                  // onChange={e => setEmail (e.target.value)}
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
                  placeholder="Minimum 6 characters..."
                  className="form-control border-0 shadow"
                  // value={password}
                  // onChange={e => setPassword (e.target.value)}
                />
              </div>

              <div className="row form-group align-items-center justify-content-center">

                <button
                  className="btn waves-effect shadow mt-2 "
                  // onClick={() => PostData ()}
                  style={{
                    backgroundColor: '#201140',
                    color: 'white',
                  }}
                >

                  Log In{' '}
                </button>
              </div>
              <div className="row form-group align-items-center justify-content-center">

                <Link
                  to="/signup"
                  className="d-block"
                  style={{
                    color: '#201140',
                  }}
                >
                  {' '}
                  Don't have an account already?{' '}
                </Link>
              </div>
              <div className="row form-group align-items-center justify-content-center">
                <Link
                  to="/reset"
                  className="d-block"
                  style={{color: '#201140'}}
                >
                  Forgot Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCourse;
