import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import landing__img from './assets/landingimg.svg';
import './signup.css';


var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

const LandingContent = () => {
    return (
        <div className='signUp'>
            <div className="halfBlack"></div>
            <div className="signUpSection">
                <img className="logo" src=""></img>
                <h1 className="title">Sign Up For Beacon</h1>
                
                <form>
                    <input className="signUpEmail" type="email" placeholder="Enter your email address..."/>
                    <input className="signUpPass" type="password" placeholder="Enter a password"/>
                    <input className="signUpConfPass" type="password" placeholder="Confirm your password"/>
                    <button className="getStarted" type="submit">Get Started with Beacon</button>
                </form>

                <Link to={{ pathname: '/login'}}>
                    <h1 className="loginDirect">Already have an account? Log in.</h1>
                </Link>

                <div className="line1"></div>
                <h1 className="or">OR</h1>
                <div className="line1"></div>

            </div>
                    
        
        </div>
    );
}


export default LandingContent;