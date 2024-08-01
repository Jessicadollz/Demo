import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthContext";

function Dashboard() {
    const {logout} = useContext(authContext);
    
    return (
        <>
           <div className="dashboard-container">
            <h1>Dashboard</h1>
            <button onClick={logout}>Logout</button>
            <div>
                <Link to="/home">Home</Link>
            </div>
        </div>

           {/* <Link to="/home">Home</Link> */}
        </>
    );
}

export default Dashboard;