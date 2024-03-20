import { useLoaderData } from "react-router";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { deleteDataFromLocal } from "../../../utils/user";
import { getUserAddress } from "../../../utils/address";
import { useState } from "react";
import deleteIcon from "../../../assets/images/delete-icon.png";
import editIcon from "../../../assets/images/edit-icon.png";
import showIcon from "../../../assets/images/show-icon.png";
import defaultUserImg from "../../../assets/images/user-icon.png";
function Home() {
  const [users, setUsers] = useState(useLoaderData());
  const handleDelete = async (userId) => {
    const confirm = window.confirm("Do you realy want to delete");
    if (confirm) {
      const address = await getUserAddress(userId);

      if (address) await deleteDataFromLocal(address?.id || 0, "addresses");
      const updatedUser = await deleteDataFromLocal(userId, "users");
      console.log("error in address", updatedUser);
      setUsers(updatedUser);
    }
  };
  return (
    <>
      {/* <div>
        YOU ARE HERE {">"} <Link to={"../../"}>Admin</Link> {">"}{" "}
        <Link to={"../"}>Users</Link>
      </div> */}
      <div className={styles.cardsContainer}>
        <h2>User management</h2>
        <Link to={"new"} className={styles.new}>
          New
        </Link>
        <div className={styles.cards}>
          <div className={styles.cardHeader}>
            <p>S.no</p>
            <p>AVATAR</p>
            <p>FIRST NAME</p>
            <p>LAST NAME</p>
            <p>E-MAIL</p>
            <p>ROLE</p>
            <p>ACTIONS</p>
          </div>
          {!users && <p>NO users Found</p>}
          {users &&
            users.map((user, index) => (
              <div key={user.id} className={styles.card}>
                <p>{index + 1}</p>
                <p>
                  <img
                    src={
                      user.userImage
                        ? `/demo-images/${user.userImage}`
                        : defaultUserImg
                    }
                    alt="user Profile"
                  />
                </p>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
                <p className={styles.action}>
                  <Link to={user.id}>
                    <img src={showIcon} alt="show" />
                  </Link>
                  <Link to={`${user.id}/edit`}>
                    <img src={editIcon} alt="edit" />
                  </Link>
                  <button href="" onClick={() => handleDelete(user.id)}>
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
// export const loader = () => {
//   // http();

//   return getUsersFromLocal();
// };
