import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../UI";
import { Layouts } from "./Layouts";

const RootLayout = () => {
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(true);
  };
  const handleNavClose = () => {
    setNavOpen(false);
  };
  return (
    <div className="app">
      <Sidebar navOpen={navOpen} handleNavClose={handleNavClose} />
      <Layouts>
        <Header handleNavOpen={handleNavOpen} />
        <main className="main_app">
          <Suspense fallback={<p>Loading..</p>}>
            <Outlet />
          </Suspense>
        </main>
      </Layouts>
    </div>
  );
};

export default RootLayout;
