import { Suspense } from "react";
import { Outlet } from "react-router-dom";
//import { Audio } from "react-loader-spinner";
import UserMenu from "../UserMenu/UserMenu.jsx";

const Layout = () => {
  return (
    <>
      <UserMenu />
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
