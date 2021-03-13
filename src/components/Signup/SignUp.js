import { BrowserRouter as Link } from 'react-router-dom';
import React from 'react';
import logo from "./assets/beacon-logo.svg";
import './signup.css';


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

const SignUpContent = () => {
    return (
        <div className='signUp'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="halfBlack"></div>
            <div className="signUpSection">
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="title">Sign Up For Beacon</h1>
                
                <form className="form">
                    <input className="form__email" type="email" placeholder="Enter your email address..."/>
                    <input className="form__pass" type="password" placeholder="Enter a password"/>
                    <input className="form__confPass" type="password" placeholder="Confirm your password"/>
                    <Link to={{ pathname: '/login'}}>
                        <h1 className="loginDirect">Already have an account? Log in.</h1>
                    </Link>
                    <button className="form__getStarted" type="submit">Get Started with Beacon</button>
                </form>


                <div className="line1"></div><h1 className="or">OR</h1><div className="line2"></div>        

            </div>
                    
        
        </div>
    );
}


export default SignUpContent;