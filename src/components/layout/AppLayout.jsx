import { Outlet, redirect } from "react-router";
import UserSateProvider from "../../store/userStateProvider";

function AppLayout() {
  return <UserSateProvider>{<Outlet />}</UserSateProvider>;
}

export default AppLayout;
