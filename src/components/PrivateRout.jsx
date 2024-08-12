import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }
     if(user){
        return children;
     } 
     return <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRout;