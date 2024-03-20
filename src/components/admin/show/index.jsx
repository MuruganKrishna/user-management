import styles from "./show.module.css";
import { getUser } from "../../../utils/user";
import { getUserAddress } from "../../../utils/address";
import { redirect, useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import ShowUserImage from "../../shared/user-image";
function Show() {
  const { user, address } = useLoaderData();
  return (
    <>
      <div className={styles.info}>
        <h2>Personel Information</h2>
        <button>
          <Link to="..">Back</Link>
        </button>
      </div>
      <div className={styles.photoContainer}>
        <ShowUserImage userImage={user.userImage} />
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
          <p className={styles.userValue}>{address?.city}</p>
        </div>
        <div>
          <p>Zipcode</p>
          <p className={styles.userValue}>{address?.zipcode}</p>
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
  debugger;
  if (!data.user) {
    return redirect("users");
  }
  return data;
};
