import React from "react";
import {Navigate} from "react-router-dom";
import { isLoggedIn,getRole } from "../utils/auth";

const ProtectedRoute=({allowedRoles,children})=>{
    //1) if not logged in->redirect to login
    if(!isLoggedIn()){
        return <Navigate to="/login" replace/>
    }
    //2)if loggedin but check role if wrong role ->redirect to home
    const role=getRole();
    if(allowedRoles && !allowedRoles.includes(role)){
        return <Navigate to="/" replace/>

    }
    return children;
}
export default ProtectedRoute;