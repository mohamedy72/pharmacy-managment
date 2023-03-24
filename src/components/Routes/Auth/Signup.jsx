import "./auth.css";

import { ActionButton } from "@/components/UI/Button/Button";
import { Error, TextInput } from "@/components/Widgets";
import { Formik } from "formik";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { initialValues, validationSchema } from "./authValidation";

const Signup = () => {
  const [error, setError] = useState(null);

  return (
    <div className="auth_container">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(formik) => (
          <div className="signup_form">
            <Form className="form" method="post">
              {error && <Error duration={4000} error={error} />}
              <div className="form_container">
                <TextInput label="Username" name="username" type="text" />
              </div>
              <div className="form_container">
                <TextInput label="Email Address" name="email" type="email" />
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

export async function signupAction() {}
