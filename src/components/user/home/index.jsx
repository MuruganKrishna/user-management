import { useLoaderData, useNavigation } from "react-router";
import { getCurrentUser } from "../../../utils/user";
import styles from "./home.module.css";
import userIcon from "../../../assets/images/user-icon.png";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserState } from "../../../store/userStateProvider";
function Home() {
  const { setCurrentUser } = useContext(UserState);
  const user = useLoaderData();
  useEffect(() => setCurrentUser(user), [user]);
  // setCurrentUser(user);
  const { state } = useNavigation();
  const isDisabled = state === "loading";
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
      <button disabled={isDisabled}>
        <Link to="edit">{isDisabled ? "Loading..." : "Edit User"}</Link>
      </button>
    </div>
  );
}

export default Home;
export const loader = async () => {
  const userToken = localStorage.getItem("userToken");
  const user = await getCurrentUser(userToken);
  return user;
};
