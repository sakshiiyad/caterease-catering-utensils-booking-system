const TOKEN_KEY="token";
const ROLE_KEY="role";


//save auth details
export const setAuth=({token,role})=>{
localStorage.setItem(TOKEN_KEY,token);
localStorage.setItem(ROLE_KEY,role);
}

//get auth details
export const getToken=()=>{
    return localStorage.getItem(TOKEN_KEY);
}

//read the role

export const getRole=()=>{
    return localStorage.getItem(ROLE_KEY);
}

//check if user is authenticated
export const isLoggedIn=()=>{
    return !!getToken();
}

//clear auth details
export const clearAuth=()=>{
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLE_KEY);
}