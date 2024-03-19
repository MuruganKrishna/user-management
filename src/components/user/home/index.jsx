import { useLoaderData } from "react-router";
import { getCurrentUser } from "../../../utils/user";
import styles from "./home.module.css";
import userIcon from "../../../assets/images/user-icon.png";
import { Link } from "react-router-dom";
function Home() {
  const user = useLoaderData();
  return (
    <div className={styles.showPage}>
      <h2>
        Welcome {user.firstName} {user.lastName} !!!
      </h2>
      {user.userImage && (
        <img src={`/demo-images/${user.userImage}`} alt="user" />
      )}
      {!user.userImage && <img src={userIcon} alt="default" />}
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <h3>{user.email}</h3>
      <Link to="edit">Edit User</Link>
    </div>
  );
}

export default Home;
export const loader = async () => {
  const userToken = localStorage.getItem("userToken");
  const user = await getCurrentUser(userToken);
  return user;
};
