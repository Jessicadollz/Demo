import React, { useContext, useState } from "react"
import { authContext } from "../AuthContext";
import { Link } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const {login} = useContext(authContext);

  return (
    <div className="auth-container">
        <h1>Login</h1>
        {/* <div className="btn-container">
        <Link to="/login" className="btn">SignIn</Link> 
        <Link to="/signup" className="btn">SignUp</Link>
        </div> */}
        {/* <Link to="/login" className="btn">SignIn</Link> 
        <Link to="/signup" className="btn">SignUp</Link> */}
        <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="Email" />
        <input onChange={(e) => setPassword(e.currentTarget.value)} type="text" placeholder="Password" />
        <button onClick={() => login(email, pass)} style={{marginBottom:"2rem"}}>Login</button> <br />

        <div className="btn-container">
        <Link to="/login" className="btn">SignIn</Link> 
        <Link to="/signup" className="btn">SignUp</Link>
        </div>
    </div>

  )
}

export default Login
