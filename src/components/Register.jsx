import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, email, password, photo)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .then(error => {
            console.log(error)
        })
    }
    return (
       <div className="mt-32">
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
        <div className="text-center">
        <h1 className="text-2xl font-bold">Register here now!</h1>
       
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="text-center mb-4">
          <p>Already have an acount? <Link to="/login">
          <span className="text-2xl text-sky-700 font-bold ml-4 border-spacing-2">Login</span>
          </Link></p>
        </div>
      </div>
    </div>
  </div>
       </div>
      );
  };

export default Register;