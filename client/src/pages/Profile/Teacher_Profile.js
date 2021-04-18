import React from 'react';
import Header from '../../shared/Header';

// import Course from '../components/Course';
import {NotificationManager} from 'react-notifications';
class Teacher_Profile extends React.Component{
  constructor(props) {
    super(props);
    
    // const [profiledata, setprofiledata] = useState ([]);

    // this.state = {name: 'Vighnesh', subject:"Markting", detail:"PHD, Btech in abc, 5 years experience in teaching",email:"vighnesh@somaiya.edu",phone:"998723123",website:"linkedin.com" ,profile_photo:"", url:""};
    this.state = {name: '', subject:"", detail:"",email:"",phone:"",website:"" ,profile_photo:"", url:"",password:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.profileimage = this.profileimage.bind(this);
  
}
componentDidMount() {
    fetch ('/Profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        this.setState({name:result.teacher_name.name,
            email:result.teacher_name.email,
            subject:result.subject,
            detail:result.about,
            phone:result.phone,
            website:result.website,
            profile_photo:result.profile_photo
        });
        console.log("this.state :",this.state)
      });
    }
  image(profile ){
    if(this.state.profile_photo===""){
     return "./assets/upload/teachers/teacher4.jpg";
    }
    else{
      return profile;
    }
  }  
  profileimage() {
  console.log("profileimage func");
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
        
        
        this.setState({url:data.url, } );
        this.setState({profile_photo:this.state.url})
        console.log(this.url);
        console.log(this.profile_photo);  

        console.log("Profile func end");
      })  
      .catch (err => {
        console.log (err);
      });
}
handleChange(event) {
      if (event.target.name=== "img"){
          console.log(event.target.files[0])
          this.setState({profile_photo:event.target.files[0]})
          console.log(this.state.profile_photo);
          // var temp= await this.profileimage();
          // console.log("printing url :",temp);
          // this.setState({url:temp, } );
          // this.setState({profile_photo:this.state.url})
          
      }else{
    
    this.setState({[event.target.name] : event.target.value});}
  }

 handleSubmit(event) {
  this.profileimage();
  
 
    
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
      
          // if(this.state.phone.length<10){
          // NotificationManager.error ('Please provide valid phone number!!');
          // return;
          // }
        console.log(JSON.stringify ({
            about: this.state.detail,
            website: this.state.website,
            subject: this.state.subject,
            phone: this.state.phone,
            profile_photo:this.state.profile_photo,
            url:this.state.url

          }));
          setTimeout(() =>{ 
            fetch ('/Profile1', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
              },
              body: JSON.stringify ({
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                about: this.state.detail,
                website: this.state.website,
                subject: this.state.subject,
                phone: this.state.phone,
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
                            <i className="fa fa-picture-o" />
                          </div>
                          <div className="detail-content">
                            <h2>Upload Profile</h2>
                            <input type="file"  name="img" onChange={this.handleChange}  accept="image/*"></input>                          </div>
                        </div>
                      </div>
                        <br></br>
                        <div className="line-details">
                        <div className="detail-item">
                          <div className="icon-holder">
                            <i className="fa fa-info-circle" />
                          </div>
                          <div className="detail-content">
                            <h2>About You:</h2>
                            <textarea name="detail" value={this.state.detail} onChange={this.handleChange} />                          </div>
                        </div>
                      </div>
                      
                      <div className="line-details">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="detail-item">
                              <div className="icon-holder">
                                <i className="fa fa-external-link" />
                              </div>
                              <div className="detail-content">
                                <h2>Website:</h2>
                                <input type="text" name="website" value={this.state.website} onChange={this.handleChange} ></input>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
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
                        </div>
                      </div>
                      <div className="line-details">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="detail-item">
                              <div className="icon-holder">
                                <i className="fa fa-book" />
                              </div>
                              <div className="detail-content">
                                <h2>Subject:</h2>
                                <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} ></input>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
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
                        </div>
                      </div>
                      <button type="submit" value="Submit" >Update</button>
                    </form>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="profile-image">
                      <div className="image-holder">
                        
                        <img src={this.image(this.state.profile_photo)}  alt="" />
                      </div>
                      <ul className="social-links">
                        <li><a href="#" className="facebook"><i className="fa fa-facebook-f" /></a></li>
                        <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"  className="google"><i className="fa fa-google-plus" /></a></li>
                        <li><a  className="linkedin" ><i className="fa fa-linkedin" /></a></li>
                      </ul>
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