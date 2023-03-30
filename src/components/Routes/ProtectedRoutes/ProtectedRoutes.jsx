import { Layouts } from "@/components/Layouts/Layouts";
import { Header, Sidebar } from "@/components/UI";
import { useAuth } from "@/context/AuthProvider";
import useBodyDismiss from "@/hooks/useBodyDismiss";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { loading } = useAuth();
  const [navOpen, setNavOpen] = useState(false);
  const sideBarRef = useRef(null);

  const { authUser } = useAuth();
  console.log(authUser);

  useEffect(() => {
    useBodyDismiss(sideBarRef, setNavOpen);
  }, [sideBarRef]);

  const handleNavOpen = () => {
    setNavOpen(true);
  };
  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    !loading && (
      <div className="app">
        <Sidebar
          navOpen={navOpen}
          handleNavClose={handleNavClose}
          handleNavOpen={handleNavOpen}
          sideBarRef={sideBarRef}
        />
        <Layouts>
          <Header handleNavOpen={handleNavOpen} />
          <section>
            <Outlet />
          </section>
        </Layouts>
      </div>
    )
  );
};

export default ProtectedRoutes;
