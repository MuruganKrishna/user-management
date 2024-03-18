import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import styles from "./edit.module.css";
import Button from "../../UI/button";
import { useRef, useState } from "react";
import userDefaultImage from "../../../assets/images/user-icon.png";
import { parseFormData } from "parse-nested-form-data";
import AddressInfo from "./addressInfo";
import UserInfo from "./userInfo";
import { getUserAddress } from "../../../utils/address";
import { getCurrentUser, updateData } from "../../../utils/user";

function Edit() {
  const { state } = useNavigation();
  const { user, address } = useLoaderData();
  const imgRef = useRef();
  const [userImage, setUserImage] = useState(user.userImage);
  const handleImage = () => {
    imgRef.current.click();
  };
  const handleImageChange = (e) => {
    setUserImage(e.target.files[0].name);
  };

  return (
    <div className={styles.editPage}>
      <h2>Edit User</h2>
      <Form method="post" className={styles.form}>
        {userImage && (
          <img
            src={`/demo-images/${userImage}`}
            alt="userImage"
            onClick={handleImage}
          />
        )}
        {!userImage && (
          <img
            src={userDefaultImage}
            alt="defaultImage"
            onClick={handleImage}
          />
        )}
        <input
          ref={imgRef}
          style={{ display: "none" }}
          type="file"
          name="user.userImage"
          onChange={handleImageChange}
        />
        <UserInfo user={user} />
        <AddressInfo styles={styles} address={address} />
        <div className={styles.btnGroup}>
          <Button disabled={state === "submitting" || state === "loading"}>
            {state === "submitting" ? "Saving..." : "Save"}
          </Button>
          <Button disabled={state === "submitting" || state === "loading"}>
            <Link to="../">Back</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Edit;
export const action = async ({ params, request }) => {
  const formData = parseFormData(await request.formData());
  const user = await updateData(formData.user, "users");
  const address = await updateData(formData.address, "addresses");
  console.log({ user, address });
  // const currentUser =
  // async () => {user:await getCurrentUser(),address:await get}
  return redirect("/user");
};
export const loader = async () => {
  const user = await getCurrentUser();
  const address = await getUserAddress(user.id);
  return { user, address };
};
