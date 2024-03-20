import styles from "./header.module.css";
import hmb from "../../../assets/images/hambr-icon.png";
import searchIcon from "../../../assets/images/search-icon.png";
import logoutIcon from "../../../assets/images/logout.png";
import { useContext } from "react";
import { UserState } from "../../../store/userStateProvider";
import ShowUserImage from "../../shared/user-image";
import { Link } from "react-router-dom";
function Header() {
  const { currentUser } = useContext(UserState);
  const userName =
    currentUser && `${currentUser.firstName} ${currentUser.lastName}`;
  return (
    <div className={styles.header}>
      <div className={styles.hambrg}>
        <img src={hmb} alt="menu" />
      </div>
      <div className={styles.search}>
        <input type="text" name="search" placeholder="Search here" />
        <img src={searchIcon} alt="search" />
      </div>
      <div className={styles.userIcon}>
        <ShowUserImage userImage={currentUser?.userImage} />
      </div>
      <div className={styles.userName}>{userName}</div>
      <div className={styles.setting}>
        <Link to="/logout">
          <img src={logoutIcon} alt="settings" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
