import React from "react";
import { auth } from "./Firebase";
import { Navigate } from "react-router-dom";

function Protected({children}) {
    return ( auth.currentUser ? children : <Navigate to="/" />) ;
}

export default Protected;