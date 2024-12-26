import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthNav from "./AuthNav.jsx";
import { Audio } from "react-loader-spinner";

const Layout = () => {
  return (
    <>
      <AuthNav />
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
