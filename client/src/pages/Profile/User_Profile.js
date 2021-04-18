import React from 'react';
import {NotificationManager} from 'react-notifications';
import Header from '../../shared/Header';

class Teacher_Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name: '',email:"",password:"" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch ('/User_Profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        this.setState({name:result.name,
            email:result.email,
           
        });
        console.log("this.state :",this.state)
      });
    }

  handleChange(event) {
    
    
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
      console.log("This state: ",this.state);
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
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
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
      
    
    
    event.preventDefault();
  }
    render(){
        return(
      <div>
      <Header/>

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
                    <form className="contact-form" onSubmit={this.handleSubmit}>
                    
                        <div className="detail-item">
                          <div className="icon-holder">
                            <i className="fa fa-user" />
                          </div>
                          <div className="detail-content">
                            <h2>Name:</h2>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} ></input>
                          </div>
                        </div>
                        
                      <br></br>
                      <div className="line-details">
                        
                            <div className="detail-item">
                              <div className="icon-holder">
                                <i className="fa fa-envelope-o" />
                              </div>
                              <div className="detail-content">
                                <h2>Email:</h2>
                                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} ></input>
                              </div>
                            </div>
                          
                      </div>
                      <div className="line-details">
                        
                            <div className="detail-item">
                              <div className="icon-holder">
                                <i className="fa fa-mobile" />
                              </div>
                              <div className="detail-content">
                                <h2>Password:</h2>
                                <input type="password" name="password"  onChange={this.handleChange} ></input>
                              </div>
                            
                        </div>
                      </div>
                      <button type="submit" value="Submit" >Update</button>
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