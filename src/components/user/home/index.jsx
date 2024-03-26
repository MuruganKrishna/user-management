import { useLoaderData, useNavigation } from "react-router";
import { getCurrentUser } from "../../../utils/user";
import styles from "./home.module.css";
import userIcon from "../../../assets/images/user-icon.png";
import UseCurrentUser from "../../../hooks/useCurrenUser";
import LoadingLink from "../../UI/loading-link";
function Home() {
  const user = useLoaderData();
  // setCurrentUser(user);
  UseCurrentUser();
  const { state } = useNavigation();
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
      <LoadingLink
        to="edit"
        idleText="Edit User"
        loadingText="Loading..."
        state={state}
      />
    </div>
  );
}

export default Home;
export const loader = async () => {
  const userToken = localStorage.getItem("userToken");
  const user = await getCurrentUser(userToken);
  return user;
};
