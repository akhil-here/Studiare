import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {NotificationManager} from 'react-notifications';
import forgotpass from '../../images/forgot_pass.webp';

const ForgotPassword = () => {
  const history = useHistory ();
  const [email, setEmail] = useState ('');

  const PostData = () => {
    if (email.length < 1) {
      NotificationManager.error ('Please provide email!!');
      return;
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test (
        email
      )
    ) {
      NotificationManager.error ('Invalid email format!!');
      return;
    } else {
      NotificationManager.success (
        'Check our inbox for the link to reset password!!'
      );
      history.push ('/login');
    }
  };

  return (
    <div>
      <div className="row d-flex mx-auto justify-content-center">
        <div className="col-xl-7 col-12 d-flex align-items-center justify-content-center flex-column">
          <img src={forgotpass} alt="forgot password" className="w-100" />
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
                Reset your Password
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

                Enter your registered email ID{' '}
              </label>
              <input
                type="email"
                placeholder="Email goes here..."
                className="form-control border-0 shadow"
                value={email}
                onChange={e => setEmail (e.target.value)}
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
                Send Link{' '}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
