import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";



const Login = () => {
  const {signIn, googleLogin, setUser,githubLogin } = useContext(AuthContext);
  const location = useLocation();
  console.log(location)
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    console.log(email, password)
    signIn(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
     setUser(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleGithub = () => {
    githubLogin()
   .then(result => {
    setUser(result.user)
   })
   .catch(error => {
    console.log(error)
   })
  }


    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
      <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="flex justify-around">
            <button
            onClick={()=> googleLogin()}
            className="btn btn-secondary ">Google Login</button>
            <button
            onClick={()=> githubLogin()}
            className="btn btn-primary ">Github Login</button>
        </div>

      <div className="text-center mb-4">
        <p>New Here? Go to <Link to="/register">
        <span className="text-2xl text-sky-700 font-bold ml-4 border-spacing-2">Register</span>
        </Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;