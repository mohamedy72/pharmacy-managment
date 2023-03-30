import * as Yup from "yup";

export const initialValues = {
  username: "",
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  username: Yup.string().required("You should enter a username"),
  email: Yup.string()
    .required("Please enter an email")
    .email("Please enter a valid Email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters "),
});
