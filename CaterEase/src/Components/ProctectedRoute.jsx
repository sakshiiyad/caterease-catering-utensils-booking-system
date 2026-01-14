import React from "react";
import {Navigate} from "react-router-dom";
import { isLoggedIn,getRole } from "../utils/auth";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute=({allowedRoles,children})=>{
    const{isAuth, role}=useAuth();
    if(!isAuth){
        return <Navigate to="/login" replace/>
    }
    //2)if loggedin but check role if wrong role ->redirect to home
    
    if(allowedRoles && !allowedRoles.includes(role)){
        return <Navigate to="/" replace/>

    }
    return children;
}
export default ProtectedRoute;