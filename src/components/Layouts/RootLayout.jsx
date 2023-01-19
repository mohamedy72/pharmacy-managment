import useBodyDismiss from "@/hooks/useBodyDismiss";
import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header, Sidebar } from "../UI";
import { Layouts } from "./Layouts";

const RootLayout = () => {
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const sideBarRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") navigate("/dashboard");
    useBodyDismiss(sideBarRef, setNavOpen);
  }, [sideBarRef]);

  const handleNavOpen = () => {
    setNavOpen(true);
  };
  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <div className="app">
      <Sidebar
        navOpen={navOpen}
        handleNavClose={handleNavClose}
        handleNavOpen={handleNavOpen}
        sideBarRef={sideBarRef}
      />
      <Layouts>
        <Header handleNavOpen={handleNavOpen} />
        <Suspense fallback={<p>Loading..</p>}>
          <section>
            <Outlet />
          </section>
        </Suspense>
      </Layouts>
    </div>
  );
};

export default RootLayout;
