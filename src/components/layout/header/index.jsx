import styles from "./header.module.css";
import hmb from "../../../assets/images/hambr-icon.png";
import searchIcon from "../../../assets/images/search-icon.png";
import gearIcon from "../../../assets/images/gear.png";
function Header() {
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
        <p>E</p>
      </div>
      <div className={styles.userName}>Eegene</div>
      <div className={styles.setting}>
        <img src={gearIcon} alt="settings" />
      </div>
    </div>
  );
}

export default Header;
