import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import "./LogIn.css";

const LogIn = () => {
  const { logInUser, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        toast.info("LogIn Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // google Login
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        toast.info("LogIn Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <br />
      <button onClick={handleGoogleLogIn} className="btn-submit">
        Login With Google
      </button>

      <p>
        New to ema john <Link to="/register">Create a New Account</Link>
      </p>
    </div>
  );
};

export default LogIn;
