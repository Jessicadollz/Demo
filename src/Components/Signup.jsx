import React, { useContext, useState } from "react"
import { authContext } from "../AuthContext";
import { Link } from "react-router-dom"

function Signup() {

    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const {signup} = useContext(authContext);

  return (
    <div className="auth-container">
        {/* <Link to="/login">SignIn</Link>
        <Link to="/signup">SignUp</Link> */}
        <h1>Signup</h1>
        <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="Email" />
        <input onChange={(e) => setPassword(e.currentTarget.value)} type="text" placeholder="Password" />
        <button onClick={() => signup(email, pass)} style={{marginBottom:"2rem"}}>Signup</button>

        <div className="btn-container">
        <Link to="/login" className="btn">SignIn</Link> 
        <Link to="/signup" className="btn">SignUp</Link>
        </div>
    </div>
  )
}

export default Signup
