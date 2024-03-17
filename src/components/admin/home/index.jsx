import { useLoaderData } from "react-router";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Button from "../../UI/button";
function Home() {
  const users = useLoaderData();
  return (
    <>
      <div>
        YOU ARE HERE {">"} <Link to={"../../"}>Admin</Link> {">"}{" "}
        <Link to={"../"}>Users</Link>
      </div>
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
                    src={`/demo-images/${user.userImage}`}
                    alt="user Profile"
                  />
                </p>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
                <p>
                  <Link to={user.id}>Show</Link>
                  <Link to={`${user.id}/edit`}>Edit</Link>
                  <Button>Delete</Button>
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
