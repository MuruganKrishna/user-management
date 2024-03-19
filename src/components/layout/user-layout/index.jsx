import { Outlet } from "react-router";

import styles from "./user-layout.module.css";
import { UserState } from "../../../store/userStateProvider";
import { useContext } from "react";
function UserLayout() {
  const { setLoginState } = useContext(UserState);
  const userToken = localStorage.getItem("userToken");
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        User Management
        {userToken && (
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
