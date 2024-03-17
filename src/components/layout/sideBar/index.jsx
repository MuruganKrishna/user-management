import styles from "./sideBar.module.css";
import userIcon from "../../../assets/images/user-icon.png";
function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar1}>
        <h2>User Mangement</h2>
      </div>
      <div className={styles.sideBar2}>
        <ul>
          <li>
            <div className={styles.userSideBar}>
              <img src={userIcon} alt="user-icon" />
              <h3>Users</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
