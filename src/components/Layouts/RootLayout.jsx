import { useAuth } from "@/context/AuthProvider";
import { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();
  const { authUser, sessionObj } = useAuth();

  useEffect(() => {
    if ((!authUser, !sessionObj)) {
      navigate("/login");
    }
    if (authUser && sessionObj) {
      navigate("/dashboard");
    }
  }, [authUser, sessionObj]);

  return <Outlet />;
};

export default RootLayout;
