import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    // console.log(email, password, confirm);

    if (password.length < 6) {
      toast.error("Password should be 6 characters or more.");
      return;
    }

    if (password !== confirm) {
      toast.error("Your Password did not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        toast.info("Account Create Successfully");
        form.reset();
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="Register" />
      </form>
      <p>
        Already Have an Account <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
