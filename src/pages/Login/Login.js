import { BrowserRouter as Link } from 'react-router-dom';
import React from 'react';
import logo from "./assets/beacon-logo.svg";
import './login.css';


// var googleUser = {};
//   var startApp = function() {
//     gapi.load('auth2', function(){
//       // Retrieve the singleton for the GoogleAuth library and set up the client.
//       auth2 = gapi.auth2.init({
//         client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
//         cookiepolicy: 'single_host_origin',
//         // Request scopes in addition to 'profile' and 'email'
//         //scope: 'additional_scope'
//       });
//       attachSignin(document.getElementById('customBtn'));
//     });
//   };

//   function attachSignin(element) {
//     console.log(element.id);
//     auth2.attachClickHandler(element, {},
//         function(googleUser) {
//           document.getElementById('name').innerText = "Signed in: " +
//               googleUser.getBasicProfile().getName();
//         }, function(error) {
//           alert(JSON.stringify(error, undefined, 2));
//         });
//   }

const Login = () => {
    return (
        <div className='logIn'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="halfBlack"></div>
            <div className="logInSection">
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="title">Log in to Beacon</h1>
                <h1 className="title__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore.</h1>

                
                <form className="form">
                    <input className="form__email" type="email" placeholder="Enter your email address..."/>
                    <input className="form__pass" type="password" placeholder="Enter a password"/>
                    <Link to={{ pathname: '/signup'}}>
                        <h1 className="signupDirect">Need an Account? Sign Up.</h1>
                    </Link>
                    <button className="form__continue" type="submit">Continue</button>
                </form>


                <div className="line1"></div><h1 className="or">OR</h1><div className="line2"></div>        

            </div>
                    
        
        </div>
    );
}


export default Login;