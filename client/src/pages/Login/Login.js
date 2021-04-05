import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { toast } from 'react-toastify';
import { UserContext } from '../../App';
import log_gif from '../../images/login.gif';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const PostData = () => {
        if (email.length < 1) {
            NotificationManager.error('Please provide email!!');
            // M.toast({ html: "Please provide email!!", classes: "#e53935 red darken-1" });
            return;
        }
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                email
            )) {
            NotificationManager.error('Invalid email format!!');
            // M.toast({ html: "Invalid email format!!", classes: "#e53935 red darken-1" });
            return;
        }
        fetch('/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    NotificationManager.danger(data.error);
                    // M.toast({ html: data.error, classes: "#e53935 red darken-2" });
                } else {
                    localStorage.setItem('jwt', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    dispatch({
                        type: 'USER',
                        payload: data.user,
                    });
                    // M.toast({
                    //   html: "Log In successful!!",
                    //   classes: "#388e3c green darken-2",
                    // });
                    NotificationManager.success('Log In successful!!');
                    if (data.user.role === 'Teacher') {
                        history.push('/teacher');
                    } else {
                        history.push('/home');
                    }
                }
            });
    };

    return ( <
            div >
            <
            div className = "row d-flex" >
            <
            div className = "col-xl-7 col-12 d-flex align-items-center justify-content-center flex-column" >
            <
            img src = { log_gif }
            alt = "Login GIF"
            className = "w-100" / >
            <
            /div> <
            div className = "col-xl-5 col-12 text-white d-flex align-items-center justify-content-center flex-column" > { ' ' } { /* <form method="POST" action="http:localhost:5000/login" className="w-75"> */ } <
            div className = "w-75" >
            <
            div className = "form-group" >
            <
            h1 className = "font-weight-bold py-4 text-center"
            style = {
                {
                    fontSize: '3rem',
                    color: '#201140',
                    letterSpacing: 1,
                }
            } >
            { ' ' }
            Login { ' ' } <
            /h1> <
            /div> <
            div className = "form-group" >
            <
            label style = {
                {
                    color: '#201140',
                    fontSize: '1rem',
                    marginTop: '2rem',
                    fontWeight: 'bold',
                }
            } >
            { ' ' }
            Email ID { ' ' } <
            /label> <
            input type = "email"
            placeholder = "Email goes here..."
            className = "form-control"
            value = { email }
            onChange = { e => setEmail(e.target.value) }
            />

            <
            /div> <
            div className = "form-group" >

            <
            label style = {
                {
                    color: '#201140',
                    fontSize: '1rem',
                    marginTop: '1rem',
                    fontWeight: 'bold',
                }
            } >
            { ' ' }
            Password { ' ' } <
            /label> <
            input type = "password"
            placeholder = "Minimum 6 characters..."
            className = "form-control"
            value = { password }
            onChange = { e => setPassword(e.target.value) }
            /> <
            /div>

            <
            div className = "row form-group align-items-center justify-content-center" >

            <
            button className = "btn waves-effect shadow mt-2 "
            onClick = {
                () => PostData() }
            style = {
                {
                    backgroundColor: '#201140',
                    color: 'white',
                }
            } >
            { ' ' }
            Log In { ' ' } <
            /button> <
            /div> <
            div className = "row form-group align-items-center justify-content-center" >

            <
            Link to = "/signup"
            className = "d-block"
            style = {
                {
                    color: '#201140',
                }
            } >
            { ' ' }
            Don 't have an account already?{'
            '} <
            /Link> <
            /div> <
            /div> {/ * < /form> */
        } <
        /div> <
        /div> <
        /div>
);
};

export default Login;