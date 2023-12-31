import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("Minimum six characters, at least one letter and one number");
    }

    createUser(name, email, password, photo)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col ">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <div className="alert alert-success">
                <span>{error}</span>
              </div>
              <p className="text-red-500 font-bold">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already Have an Account? Please{" "}
              <Link to="/login">
                <button className="btn-link font-bold">Login</button>
              </Link>
            </p>
          </form>
          <div className="flex justify-center py-3">
            <button onClick={handleGoogle} className="btn">
              <img
                className="w-5"
                src="https://i.ibb.co/b2CSKK1/Pik-Png-com-google-icon-png-344234.png "
                alt=""
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
