import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result)
            navigate(from, { replace: true });
        })
        .then(error => {
            console.log(error)
        })
    }
    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            console.log(result)
            navigate(from, { replace: true });
        })
        .then(error => {
            console.log(error)
        })
    }

    return (
        <>
        <div className="flex justify-around">
            <button
            onClick={handleGoogleLogin}
            className="btn btn-outline">Google Login</button>
            <button
            onClick={handleGithubLogin}
            className="btn btn-outline">Github Login</button>
        </div>
       </>
    );
};

export default SocialLogin;