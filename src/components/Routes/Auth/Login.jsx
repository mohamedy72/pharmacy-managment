import "./auth.css";

import { ActionButton } from "@/components/UI/Button/Button";
import { Error, TextInput } from "@/components/Widgets";
import { Formik } from "formik";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { initialValues, validationSchema } from "./authValidation";

const Login = () => {
  const [error, setError] = useState(null);

  return (
    <div className="auth_container">
      <Formik
        initialValues={initialValues.email}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <div className="login_form">
            <Form className="form" method="post">
              {error && <Error duration={4000} error={error} />}
              <div className="form_container">
                <TextInput label="Email Address" name="email" type="email" />
              </div>

              <ActionButton type="submit" label="Log in" btnClass="btn_red" />
            </Form>
            <p>
              Don't have an account?{" "}
              <Link to="/signup">
                <ActionButton btnClass="btn_red" label="Sign up" />
              </Link>
            </p>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;

export async function loginAction() {}
