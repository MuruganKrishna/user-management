import { Outlet } from "react-router";

function UserLayout() {
  return (
    <>
      <h1>User Layout</h1>
      <Outlet />
    </>
  );
}

export default UserLayout;
