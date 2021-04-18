import React from 'react';
import {Link} from 'react-router-dom';
import {NotificationManager} from 'react-notifications';
import Header from '../../shared/Header';
import user from '../../images/userprofile.webp';

class User_Profile extends React.Component {
  constructor (props) {
    super (props);
    this.state = {name: '', email: '', password: ''};

    this.handleChange = this.handleChange.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
  }
  componentDidMount () {
    fetch ('/User_Profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        this.setState ({
          name: result.name,
          email: result.email,
        });
        console.log ('this.state :', this.state);
      });
  }

  handleChange (event) {
    this.setState ({[event.target.name]: event.target.value});
  }

  handleSubmit (event) {
    console.log ('This state: ', this.state);
    if (this.state.email.length < 1) {
      NotificationManager.error ('Please provide email!!');
      return;
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test (
        this.state.email
      )
    ) {
      NotificationManager.error ('Invalid email format!!');
      return;
    }

    fetch ('/User_Profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
      body: JSON.stringify ({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then (res => res.json ())
      .then (data => {
        if (data.error) {
          NotificationManager.error (data.error);
        } else {
          console.log (data);
          NotificationManager.success ('Profile Updated successfully!!');
        }
      });

    event.preventDefault ();
  }
  render () {
    return (
      <div>
        <Header />

        {/* Container */}
        <div id="container">
          {/* page-banner-section 
			================================================== */}
          <section className="page-banner-section">
            <div className="container">
              <h1>Profile</h1>
              <ul className="page-depth">
                <li><Link to="/home">Studiare</Link></li>
                <li><Link to="/SingleTeacher">{this.state.name}</Link></li>
              </ul>
            </div>
          </section>
          {/* End page-banner-section */}
          {/* teachers-section 
			================================================== */}

          <div className="row d-flex mx-auto justify-content-center">
            <div className="col-xl-7 col-12 flex-column ">
              <img src={user} alt="Create course" />
            </div>
            <div className="col-xl-5 col-12 flex-column ">
              <div className="profile-details">
                <form className="contact-form" onSubmit={this.handleSubmit}>

                  <div className="form-group">
                    <div className="icon-holder" />
                    <div className="detail-content">
                      <i
                        className="fa fa-user"
                        style={{
                          color: '#201140',
                          fontSize: '1rem',
                          marginTop: '1.5rem',
                          fontWeight: 'bold',
                        }}
                      />
                      <label
                        style={{
                          color: '#201140',
                          fontSize: '1rem',
                          marginTop: '1rem',
                          fontWeight: 'bold',
                          marginLeft: '1rem',
                        }}
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control shadow border-0"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <br />
                  <div className="line-details">

                    <div className="form-group">
                      <div className="icon-holder" />
                      <div className="detail-content">
                        <i
                          className="fa fa-envelope-o"
                          style={{
                            color: '#201140',
                            fontSize: '1rem',
                            marginTop: '1.5rem',
                            fontWeight: 'bold',
                          }}
                        />
                        <label
                          style={{
                            color: '#201140',
                            fontSize: '1rem',
                            marginTop: '1rem',
                            fontWeight: 'bold',
                            marginLeft: '1rem',
                          }}
                        >
                          Email:
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="form-control shadow border-0"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                  </div>
                  <div className="line-details">

                    <div className="form-group">
                      <div className="icon-holder" />
                      <div className="detail-content">
                        <i
                          className="fa fa-mobile"
                          style={{
                            color: '#201140',
                            fontSize: '1rem',
                            marginTop: '1.5rem',
                            fontWeight: 'bold',
                          }}
                        />
                        <label
                          style={{
                            color: '#201140',
                            fontSize: '1rem',
                            marginTop: '1rem',
                            fontWeight: 'bold',
                            marginLeft: '1rem',
                          }}
                        >
                          Password:
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control shadow border-0"
                          onChange={this.handleChange}
                        />
                      </div>

                    </div>
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-center">
                    <button
                      className="btn waves-effect shadow mt-2 "
                      type="submit"
                      value="Submit"
                      style={{
                        backgroundColor: '#021140',
                        color: 'white',
                      }}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
          {/* <div className="teacher-content">
                  
                  <h1>Your Courses</h1>
                  <p>6 courses Purchased</p>
                  <div className="scroll">
                  <div className="row">
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                  
                  </div>
                  </div>
                </div>
                <br></br>
                <div className="teacher-content">
                  <h1>Events Enrolled</h1>
                  <p>5 Courses Enrolled</p>
                  <div className="scroll">
                  <div className="row">
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                  
                  </div>
                  </div>
                </div> 
              </div> */}

        </div>

      </div>
    );
  }
}
export default User_Profile;
