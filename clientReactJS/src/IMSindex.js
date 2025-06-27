import Logo from "./images/SpecialRecLogo.png";
import background from "./images/bg-01.jpg";
import "./css/util.css";
import "./css/index.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Tooltip styles
const tooltipContentStyle = {
    visibility: "hidden",
    width: "240px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    borderRadius: "5px",
    padding: "5px",
    position: "absolute",
    zIndex: 1,
    bottom: "125%",
    left: "50%",
    marginLeft: "-120px",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    fontSize: "13px",
    pointerEvents: "none"
};

const tooltipVisibleStyle = {
    ...tooltipContentStyle,
    visibility: "visible",
    opacity: 1
};

const tooltipIconStyle = {
    marginLeft: "6px",
    fontSize: "14px",
    verticalAlign: "middle",
    cursor: "default"
};

const LoginPage = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [adminTooltip, setAdminTooltip] = useState(false);
    const [employeeTooltip, setEmployeeTooltip] = useState(false);

    const errors = {
        uname: "Invalid Username",
        pass: "Invalid Password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { uname, pass } = event.target;

        if (uname.value === "demo" && pass.value === "password") {
            setIsSubmitted(true);
            localStorage.setItem("isAuthenticated", "true");
            window.location.href = "/admin";
        } else {
            if (uname.value !== "demo") {
                setErrorMessages({ name: "uname", message: errors.uname });
            } else {
                setErrorMessages({ name: "pass", message: errors.pass });
            }
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="input100Error">{errorMessages.message}</div>
        );

    const renderForm = (
        <form onSubmit={handleSubmit}>
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
                {/* Admin login button with tooltip */}
                <div
                    className="container-login100-form-btn"
                    onMouseEnter={() => setAdminTooltip(true)}
                    onMouseLeave={() => setAdminTooltip(false)}
                    style={{ position: "relative" }}
                >
                    <button className="custombutton" type="submit">
                        Login as Admin <span style={tooltipIconStyle}>ℹ️</span>
                    </button>
                    <div style={adminTooltip ? tooltipVisibleStyle : tooltipContentStyle}>
                        To access the admin panel view, use username: <strong>demo</strong> and password: <strong>password</strong>
                    </div>
                </div>

                <br />

                {/* Employee button */}
                <div className="container-login100-form-btn">
                    <Link to="/employee">
                        <button className="custombutton">
                            Continue as Employee
                        </button>
                    </Link>
                </div>

                <br />

                {/* Note button with tooltip */}
                <div
                    className="container-login100-form-btn"
                    onMouseEnter={() => setEmployeeTooltip(true)}
                    onMouseLeave={() => setEmployeeTooltip(false)}
                    style={{ position: "relative" }}
                >
                    <button className="custombutton" type="button">
                        Note <span style={tooltipIconStyle}>ℹ️</span>
                    </button>
                    <div style={employeeTooltip ? tooltipVisibleStyle : tooltipContentStyle}>
                        Please note: This is for demo purposes only. Server is not deployed and auth functions are disabled. For full demo please reach out
                    </div>
                </div>
            </div>
        </form>
    );

    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: `url(${background})` }}>
                <div className="wrap-login101">
                    <div className="login100-form validate-form">
            <span className="login100-form-logo">
              <img src={Logo} width={120} height={120} alt="Logo" />
            </span>
                        <span className="login100-form-title p-b-34 p-t-27">
              <div className="greenUnderline">Admin Log In</div>
            </span>
                        {isSubmitted
                            ? <div className="login100-form-title p-b-34 p-t-27">Log In Successful</div>
                            : renderForm}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
