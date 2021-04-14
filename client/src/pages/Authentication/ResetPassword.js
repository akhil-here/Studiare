import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {NotificationManager} from 'react-notifications';

const ResetPassword = () => {
  const [password, setPassword] = useState ('');
  const {token} = useParams ();

  const PostData = () => {
    if (password.length < 6) {
      NotificationManager.error ('Weak Password!!');
      return;
    }
    fetch ('/new-password', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        password,
        token,
      }),
    })
      .then (res => res.json ())
      .then (data => {
        if (data.error) {
          NotificationManager.error (data.error);
        } else {
          console.log (password);
          NotificationManager.success (data.message);
        }
      })
      .catch (error => {
        console.log (error);
      });
  };
  return (
    <div>
      <div className="row d-flex mx-auto">
        <div className="col-xl-5 col-12 text-white d-flex align-items-center justify-content-center flex-column">
          <div className="w-75">
            <div className="form-group">
              <h1
                className="font-weight-bold py-3 text-center"
                style={{
                  fontSize: '3rem',
                  fontFamily: 'inherit',
                  color: '#201140',
                  letterSpacing: 1,
                }}
              >
                Enter your new password
              </h1>
            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '.5rem',
                  fontWeight: 'bold',
                }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="form-control border-0 shadow"
                value={password}
                onChange={e => setPassword (e.target.value)}
              />
            </div>

            <div className="row form-group align-items-center justify-content-center">
              <button
                className="btn waves-effect shadow mt-2 "
                onClick={() => PostData ()}
                style={{backgroundColor: '#201140', color: 'white'}}
              >
                Update password{' '}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;
