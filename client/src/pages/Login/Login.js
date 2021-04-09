import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {NotificationManager} from 'react-notifications';
import {UserContext} from '../../App';
import login from '../../images/login.webp';
import './Login.css';

const Login = () => {
  const {state, dispatch} = useContext (UserContext);
  const history = useHistory ();
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const PostData = () => {
    if (email.length < 1) {
      NotificationManager.error ('Please provide email!!');
      return;
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test (
        email
      )
    ) {
      NotificationManager.error ('Invalid email format!!');
      return;
    }
    fetch ('/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        email,
        password,
      }),
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        if (data.error) {
          NotificationManager.error (data.error);
        } else {
          localStorage.setItem ('jwt', data.token);
          localStorage.setItem ('user', JSON.stringify (data.user));
          dispatch ({
            type: 'USER',
            payload: data.user,
          });
          NotificationManager.success ('Log In successful!!');
          history.push ('/home');
        }
      });
  };

  return (
    <div>
      <div className="row d-flex mx-auto justify-content-center">
        <div className="col-xl-7 col-12 d-flex align-items-center justify-content-center flex-column">
          <img src={login} alt="Login GIF" className="w-100" />
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
                Login
              </h1>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '2rem',
                  fontWeight: 'bold',
                }}
              >

                Email ID{' '}
              </label>
              <input
                type="email"
                placeholder="Email goes here..."
                className="form-control border-0 shadow"
                value={email}
                onChange={e => setEmail (e.target.value)}
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

                Password{' '}
              </label>
              {' '}
              <input
                type="password"
                placeholder="Minimum 6 characters..."
                className="form-control border-0 shadow"
                value={password}
                onChange={e => setPassword (e.target.value)}
              />
            </div>

            <div className="row form-group align-items-center justify-content-center">

              <button
                className="btn waves-effect shadow mt-2 "
                onClick={() => PostData ()}
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
              <Link to="/reset" className="d-block" style={{color: '#201140'}}>
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
