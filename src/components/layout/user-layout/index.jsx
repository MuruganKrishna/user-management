import { Outlet } from "react-router";

import styles from "./user-layout.module.css";
import { UserState } from "../../../store/userStateProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
function UserLayout() {
  const { setLoginState, currentUser } = useContext(UserState);
  const isUserLoggedIn = localStorage.getItem("userToken") ? true : false;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>User Management</h3>
        {isUserLoggedIn && (
          <span>
            {currentUser && currentUser.role === "admin" && (
              <button>
                <Link to={`/admins/${currentUser.id}/users`}>
                  Admin Dashboard
                </Link>
              </button>
            )}
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
