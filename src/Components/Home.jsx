import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthContext";
import '../App.css';

function Home() {
    const { logout } = useContext(authContext);

    return (
        <div className="home-container" style={{ textAlign: "center" }}>
            <div className="btn-container">
                <Link to="/login" className="btn">SignIn</Link>
                <Link to="/signup" className="btn">SignUp</Link>
            </div>
            <h1 id="hello">Hello Amigo!!!!</h1> <br />
            <button className="btn" onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;
