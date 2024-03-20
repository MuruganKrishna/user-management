import { Link } from "react-router-dom";
import styles from "./back-button.module.css";
function BackButton() {
  return (
    <button className={styles.button}>
      <Link to="..">Back</Link>
    </button>
  );
}

export default BackButton;
