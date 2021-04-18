import React from 'react';
import Header from '../../shared/Header';
import {NotificationManager} from 'react-notifications';

class Teacher_Profile extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      name: '',
      subject: '',
      detail: '',
      email: '',
      phoneNo: '',
      website: '',
      profile_photo: '',
      url: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
    this.profileimage = this.profileimage.bind (this);
  }
  componentDidMount () {
    fetch ('/Profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        this.setState ({
          name: result.teacher_name.name,
          email: result.teacher_name.email,
          subject: result.subject,
          detail: result.about,
          phoneNo: result.phoneNo,
          website: result.website,
          profile_photo: result.profile_photo,
        });
      });
  }
  image (profile) {
    if (this.state.profile_photo === '') {
      return './assets/upload/teachers/teacher4.jpg';
    } else {
      return profile;
    }
  }
  profileimage () {
    const data = new FormData ();
    data.append ('file', this.state.profile_photo);
    data.append ('upload_preset', 'studiare');
    data.append ('cloud_name', 'studiare');
    fetch ('https://api.cloudinary.com/v1_1/studiare/image/upload', {
      method: 'post',
      body: data,
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data.url);
        this.setState ({url: data.url});
        this.setState ({profile_photo: this.state.url});
      })
      .catch (err => {
        console.log (err);
      });
  }
  handleChange (event) {
    if (event.target.name === 'img') {
      console.log (event.target.files[0]);
      this.setState ({profile_photo: event.target.files[0]});
    } else {
      this.setState ({[event.target.name]: event.target.value});
    }
  }

  handleSubmit (event) {
    this.profileimage ();

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

    console.log (
      JSON.stringify ({
        about: this.state.detail,
        website: this.state.website,
        subject: this.state.subject,
        phoneNo: this.state.phoneNo,
        profile_photo: this.state.profile_photo,
        url: this.state.url,
      })
    );
    setTimeout (() => {
      fetch ('/Profile1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
        },
        body: JSON.stringify ({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          about: this.state.detail,
          website: this.state.website,
          subject: this.state.subject,
          phoneNo: this.state.phoneNo,
          profile_photo: this.state.profile_photo,
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
    }, 3000);

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
                <li><a href="/">Studiare</a></li>
                <li><a href="/SingleTeacher">{this.state.name}</a></li>
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
                    <div className="profile-details">
                      <form
                        className="contact-form"
                        onSubmit={this.handleSubmit}
                      >

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
                              className="form-control border-0 shadow"
                              value={this.state.name}
                              onChange={this.handleChange}
                            />
                          </div>

                        </div>
                        <br />

                        <div className="form-group">
                          <div className="icon-holder" />
                          <div className="detail-content">
                            <i
                              className="fa fa-picture-o"
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
                              Upload Profile
                            </label>
                            <input
                              type="file"
                              name="img"
                              className="form-control border-0 shadow"
                              onChange={this.handleChange}
                              accept="image/*"
                            />

                          </div>
                        </div>

                        <br />
                        <div className="line-details">
                          <div className="form-group">
                            <div className="icon-holder" />
                            <div className="detail-content">
                              <i
                                className="fa fa-info-circle"
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
                                About You:
                              </label>
                              <textarea
                                name="detail"
                                className="form-control border-0 shadow w-100"
                                rows="5"
                                value={this.state.detail}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group">

                            <div className="detail-content">
                              <i
                                className="fa fa-book"
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
                                Subject:
                              </label>
                              <input
                                type="text"
                                name="subject"
                                className="form-control shadow border-0"
                                value={this.state.subject}
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
                                className="fa fa-external-link"
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
                                Website:
                              </label>
                              <input
                                type="text"
                                name="website"
                                className="form-control shadow border-0"
                                value={this.state.website}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>

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
                                className="form-control border-0 shadow"
                                value={this.state.email}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">

                          <div className="detail-content">
                            <i
                              className="fa fa-phone"
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
                              Phone No:
                            </label>
                            <input
                              type="text"
                              name="phoneNo"
                              className="form-control shadow border-0"
                              value={this.state.phoneNo}
                              onChange={this.handleChange}
                            />
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
                  <div className="col-lg-6">
                    <div className="profile-image">
                      <div className="image-holder">

                        <img
                          src={this.image (this.state.profile_photo)}
                          alt=""
                        />
                      </div>

                    </div>
                  </div>
                </div>

                {/* <div className="teacher-content">
                  
                  <h1>Your Courses</h1>
                  <p>6 courses created</p>
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
                </div> */}
              </div>
            </div>
          </section>
          {/* End teachers section */}
        </div>
        {/* End Container */}
      </div>
    );
  }
}
export default Teacher_Profile;
