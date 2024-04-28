import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useContext(AuthContext)
    return (
        <>
        <div className="flex justify-around">
            <button
            onClick={()=> googleLogin()}
            className="btn btn-secondary ">Google Login</button>
            <button
            onClick={()=> githubLogin()}
            className="btn btn-primary ">Github Login</button>
        </div>
       </>
    );
};

export default SocialLogin;