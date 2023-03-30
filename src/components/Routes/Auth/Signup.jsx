import "./auth.css";

import { ActionButton } from "@/components/UI/Button/Button";
import { Error, TextInput } from "@/components/Widgets";
import { Formik } from "formik";
import { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";
import { initialValues, validationSchema } from "./authValidation";
import { signup } from "@/utils/apiCalls";

import logo from "@Assets/images/logo.png";

const Signup = () => {
  const [error, setError] = useState(null);

  return (
    <div className="auth_container">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(_formik) => (
          <div className="signup_form">
            <p className="logo">
              <img src={logo} alt="pharmaone logo" /> pharma one
            </p>
            <Form className="form" method="post">
              {error && <Error duration={4000} error={error} />}
              <div className="form_container">
                <TextInput label="Username" name="username" type="text" />
              </div>
              <div className="form_container">
                <TextInput label="Email Address" name="email" type="email" />
              </div>
              <div className="form_container">
                <TextInput label="Password" name="password" type="password" />
              </div>

              <ActionButton type="submit" label="Sign up" btnClass="btn_red" />
              <p className="auth_nav">
                Already have an account?
                <Link to="/login">
                  <ActionButton
                    type="submit"
                    label="Login"
                    btnClass="btn_red"
                  />
                </Link>
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Signup;

export async function signupAction({ request }) {
  const formData = await request.formData();
  const { username, email, password } = Object.fromEntries(formData);
  const { _data, error } = await signup(email, password, username);
  if (error) {
    return error;
  }
  return redirect("/login");
}
