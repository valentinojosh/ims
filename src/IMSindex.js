import Logo from "./images/SpecialRecLogo.png";
import background from "./images/bg-01.jpg";
 import "./css/util.css"
 import "./css/index.css"
 import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css"
 import "./fonts/iconic/css/material-design-iconic-font.min.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "test",
      password: "test"
    }
  ];

  //Error Messages
  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    setIsSubmitted(true);
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "/admin";
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
      name === errorMessages.name && (
          <div className="input100Error">{errorMessages.message}</div>
      );

  // JSX code for login form
  const renderForm = (
      <form onSubmit={handleSubmit}>

          <div className="tempNote">
                      <span style={{ color: 'red', textDecoration: 'underline' }}>
                        Note
                      </span>
              <br />
              Server down due to cost. Frontend view. Use "test" for both username and password to login as admin.
              <br />
          </div>

        <div className="wrap-input100 validate-input" data-validate="Enter username">
          <input className="input100" type="text" name="uname" required placeholder="Username" />
          <span className="focus-input100" data-placeholder="&#xf207;" />
          {renderErrorMessage("uname")}
        </div>

        <div className="wrap-input100 validate-input" data-validate="Enter password">
          <input className="input100" type="password" name="pass" required placeholder="Password" />
          <span className="focus-input100" data-placeholder="&#xf191;" />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">


          <div className="container-login100-form-btn">


            <button className="custombutton" type="submit" >
              Login as Admin
            </button>

          </div>
          <br>

          </br>
          <div className="container-login100-form-btn">
            <Link to="/Employee">
              <button className="custombutton">
                Continue as Employee
              </button>
            </Link>
          </div>
        </div>
      </form>

  );

  return (


      <div className="limiter">
        <div className="container-login100" style={{backgroundImage: `url(${background})`}}>
          <div className="wrap-login101">
            <div className="login100-form validate-form">
              <span className="login100-form-logo">
                <img src={Logo} width={120} height={120} />
              </span>
              <span className="login100-form-title p-b-34 p-t-27">
                <div className="greenUnderline">Admin Log In</div>
              </span>

              {isSubmitted ? <div className="login100-form-title p-b-34 p-t-27">Log In Successful </div> : renderForm}

            </div>
          </div>
        </div>
      </div>
     );
}
 
export default LoginPage;