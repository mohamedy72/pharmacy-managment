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
  }, []);

  return <Outlet />;
};

export default RootLayout;
