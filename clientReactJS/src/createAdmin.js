import "./css/createAdmin.css";
import "./images/icons/FVSRA_ICON.png";
import logo from "./forms/PDRMA Form 03 Property Loss Report_files/Image_001.jpg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "./images/bg-01.jpg";

const CreateAdmin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const adminAccount = {
            username,
            password // sending plain password, bcrypt removed
        };

        fetch('https://api.foxvalleyspecialrec.com/fvsra/auth', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adminAccount)
        }).then(() => {
            alert("Account Created");
        }).catch(() => {
            alert("Error creating account (demo mode)");
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container-login100" style={{ backgroundImage: `url(${background})` }}>
                    <div className="wrap-login101">
                        <span className="login100-form-title p-b-34 p-t-27">
                            <div className="greenUnderline">New Admin Account</div>
                        </span>

                        <input
                            className="input100Create"
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <input
                            className="input100Create"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="centerButton">
                            <button className="createbutton">Submit</button>
                        </div>
                    </div>

                    <Link to="/admin/settings">
                        <button className="LogoutButton">
                            Return
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CreateAdmin;
