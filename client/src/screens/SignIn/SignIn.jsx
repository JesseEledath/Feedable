import React, { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          email: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button className="sign-in-button" type="submit">
          <span className="button-span">Sign In</span>{" "}
        </button>
      );
    }
  };

  const { email, password } = form;

  return (
    <Layout>
      <div className="screen">
        <div className="form">
          <h3 className="sign-in">Sign In</h3>
          <form onSubmit={onSignIn} className="form-cont">
            <input
              required
              className="sign-in-input"
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              required
              className="sign-in-input"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
