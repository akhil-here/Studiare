import React, { useState} from 'react';
import {Link,useHistory} from "react-router-dom";
import M from "materialize-css";
import log_gif from "../../images/signup.gif"
import "./Signup.css"

const Signup = ()=>{
    const history=useHistory();
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [role,setRole]=useState("");

    const PostData = () => {
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        M.toast({ html: "Invalid email format!!", classes: "#e53935 red darken-1" });
        return;
      }
      if (
        password.length<6
      ) {
        M.toast({ html: "Weak password!!", classes: "#e53935 red darken-1" });
        return;
      }
        fetch("http://localhost:5000/signup", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.error){
              M.toast({html:data.error,classes:"#e53935 red darken-1"})
            }
            else{
              M.toast({ html: data.message, classes: "#388e3c green darken-2" });
              history.push("/login");
            }
          console.log(data)
      }).catch((error) => {
        console.log(error);
      });
    };
      return(
        <div>
            <div className="row d-flex">
            <div className="col-xl-7 col-12 d-flex align-items-center justify-content-center flex-column">
                <img src={log_gif} alt="Signup GIF" className="w-100"/>
            </div>
            <div className="col-xl-5 col-12 text-white d-flex align-items-center justify-content-center flex-column">
                <div className="w-75">
                    <div className="form-group">
                        <h1 className="font-weight-bold py-3 text-center" style={{fontSize:"3rem",fontFamily:"inherit",color:"#201140",letterSpacing:1}}>Signup
                        </h1>
                    </div>
                    <div className="form-group">
                        <label style={{color:"#201140",fontSize:"1rem",marginTop:".5rem",fontWeight:"bold"}}>Username
                        </label>
                        <input 
                            type="text" 
                            placeholder="Username goes here..." 
                            className="form-control" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{color:"#201140",fontSize:"1rem",marginTop:".5rem",fontWeight:"bold"}}>Email ID
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Email goes here..." 
                            className="form-control" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}
                        />                     
                    </div>
                    <div className="form-group">
                        <label style={{color:"#201140",fontSize:"1rem",marginTop:".5rem",fontWeight:"bold"}} >Password
                        </label>
                        <input 
                            type="password" 
                            placeholder="Minimum 6 characters..." 
                            className="form-control" 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                      <label style={{color:"#201140",fontSize:"1rem",marginTop:".4rem",fontWeight:"bold"}} >Login as
                        </label>
                        <div className="row">
                        <p className="col-md-6">
                          <label style={{color:"black",fontSize:"1rem"}}>
                            <input 
                            name="role" 
                            type="radio"
                            value='Student'
                            onChange={(e)=>setRole(e.target.value)}
                            />
                            <span>Student</span>
                          </label>
                        </p>
                        <p className="col-md-6">
                          <label style={{color:"black",fontSize:"1rem"}}>
                            <input 
                            name="role" 
                            type="radio"
                            value='Teacher' 
                            onChange={(e)=>setRole(e.target.value)}
                            />
                            <span>Teacher</span>
                          </label>
                        </p>
                        </div>
                        
                       
                    </div>
                    <div className="row form-group align-items-center justify-content-center">
                        <button className="btn waves-effect shadow " onClick={() => PostData()} style={{backgroundColor:"#201140",color:"white"}}>Sign Up
                        </button>                 
                    </div>   
                    <div className="row form-group align-items-center justify-content-center">
                      <Link to="/" className="d-block" style={{color:"#201140"}}>
                        Forgot Password
                      </Link>
                    </div>                 
                </div>
            </div>
            
        </div>
        </div>
        )
    }

export default Signup

