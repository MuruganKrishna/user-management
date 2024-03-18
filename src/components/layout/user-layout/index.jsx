import { Outlet, redirect } from "react-router";

import styles from "./user-layout.module.css";
import { UserState } from "../../../store/userStateProvider";
import { useContext } from "react";
function UserLayout() {
  const { isUserLoggedIn, setLoginState } = useContext(UserState);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        User Management{" "}
        {isUserLoggedIn && (
          <span>
            <button onClick={() => setLoginState("logout")}>Logout</button>
          </span>
        )}
      </header>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
export const checkUserToken = () => {
  if (localStorage.getItem("userToken")) {
    return redirect("/login");
  }
  return null;
};
