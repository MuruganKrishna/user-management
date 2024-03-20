import { Outlet } from "react-router";
import styles from "./adminLayout.module.css";
import Header from "../header";
import SideBar from "../sideBar";
function AdminLayout() {
  return (
    <div className={styles.AdminLayout}>
      {/* <SideBar /> */}
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
