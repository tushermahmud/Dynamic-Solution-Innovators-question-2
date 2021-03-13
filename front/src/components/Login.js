import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {

  //   }, [email, password]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/login", { email, password }, config);
    res.data.success
      ? props.history.push("/success")
      : props.history.push("/failure");
  };

  return (
    <Fragment>
      <div className="row wrapper justify-content-center py-5">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3 text-center">Login</h1>

            <div className="form-group mx-3">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mx-3">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block btn-success py-3"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Login);
