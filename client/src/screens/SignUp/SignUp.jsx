import React, { useState } from "react";
import "./SignUp.css";
import { signUp, signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;
    console.log(setUser);
    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          full_name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: console.log(error),
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "submitted";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button className="sign-up-button" type="submit">
          Sign Up
        </button>
      );
    }
  };

  const { email, full_name, password, passwordConfirmation } = form;

  return (
    <Layout>
      <div className="form-sign-up">
        <h3 className="sign-up">Sign Up</h3>
        <form onSubmit={onSignUp}>
          <label>Full name</label>
          <input
            required
            className="sign-up-input"
            type="text"
            name="full_name"
            value={full_name}
            placeholder="Enter Full Name"
            onChange={handleChange}
          />
          <label>Email address</label>
          <input
            required
            className="sign-up-input"
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            className="sign-up-input"
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label>Password Confirmation</label>
          <input
            required
            className="sign-up-input"
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
