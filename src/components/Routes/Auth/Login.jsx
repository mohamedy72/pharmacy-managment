import "./auth.css";

import { ActionButton } from "@/components/UI/Button/Button";
import { Error as PopupError, TextInput } from "@/components/Widgets";
import { Formik } from "formik";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import { initialValues, validationSchema } from "./authValidation";
import { login } from "@/utils/apiCalls";
import logo from "@Assets/images/logo.png";

const Login = () => {
  const actionError = useActionData();

  return (
    <div className="auth_container">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(formik) => (
          <div className="login_form">
            <p className="logo">
              <img src={logo} alt="pharmaone logo" /> pharma one
            </p>
            <Form className="form" method="post">
              {actionError && (
                <PopupError duration={4000} error={actionError} />
              )}
              <div className="form_container">
                <TextInput label="Email Address" name="email" type="email" />
              </div>
              <div className="form_container">
                <TextInput label="Password" name="password" type="password" />
              </div>

              <ActionButton type="submit" label="Log in" btnClass="btn_red" />
            </Form>
            <p className="auth_nav">
              Don't have an account?{" "}
              <Link to="/signup">
                <ActionButton
                  btnClass="btn_red"
                  label="Sign up"
                  type="submit"
                />
              </Link>
            </p>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;

export async function loginAction({ request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  const { data, error } = await login(email, password);

  if (data.user && !data.session) return new Error("Please confirm your email");
  if (error) {
    return new Error("Can't login. Please check your credentials");
  }
  if (data.user && data.session) {
    return redirect("/dashboard");
  }
}
