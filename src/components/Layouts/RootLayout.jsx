import { useAuth } from "@/context/AuthProvider";
import { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();
  const { authUser, sessionObj } = useAuth();
  console.log(authUser, sessionObj);
  // User doesn't exist => Render/Redirect to /login

  // User exists but didn't confirm email (No session) => Popup saying "Please confirm your email" after login

  // User exists => Render/Redirect to /dashboard

  useEffect(() => {
    if ((!authUser, !sessionObj)) {
      navigate("/signup");
    }
    if (authUser && sessionObj) {
      navigate("/dashboard");
    }
  }, []);

  return <Outlet />;
};

export default RootLayout;
