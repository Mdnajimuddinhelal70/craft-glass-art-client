import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result)
        })
        .then(error => {
            console.log(error)
        })
    }
    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            console.log(result)
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