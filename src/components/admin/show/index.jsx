import styles from "./show.module.css";
import { getUser, getUserAddress } from "../../../utils/http";
import { useLoaderData } from "react-router";
function Show() {
  const { user, address } = useLoaderData();
  return (
    <>
      <div className={styles.info}>
        <h2>Personel Information</h2>
        {/* <p>saving information</p> */}
      </div>
      <div className={styles.photoContainer}>
        <div className={styles.profilePhoto}>
          <div className={styles.userProfile}>
            <img src={`/demo-images/${user.userImage}`} alt="user Profile" />
          </div>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div>
          <p>First Name</p>
          <p className={styles.userValue}>{user.firstName}</p>
        </div>
        <div>
          <p>Last Name</p>
          <p className={styles.userValue}>{user.lastName}</p>
        </div>
        <div>
          <p>Middle Name</p>
          <p className={styles.userValue}>{user.middleName}</p>
        </div>
        <div>
          <p>Email</p>
          <p className={styles.userValue}>{user.email}</p>
        </div>
        <div>
          <p>City</p>
          <p className={styles.userValue}>{address.city}</p>
        </div>
        <div>
          <p>Zipcode</p>
          <p className={styles.userValue}>{address.zipcode}</p>
        </div>
      </div>
    </>
  );
}

export default Show;
export const loader = async ({ params, request }) => {
  const data = {
    user: await getUser(params.id),
    address: await getUserAddress(params.id),
  };
  console.log(data);
  return data;
};
