import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import styles from "./edit.module.css";
import Button from "../../UI/button";
import { parseFormData } from "parse-nested-form-data";
import AddressInfo from "./addressInfo";
import UserInfo from "./userInfo";
import { getUserAddress } from "../../../utils/address";
import { getCurrentUser, updateData } from "../../../utils/user";
import UserImageUpload from "./userImageUpload";

function Edit() {
  const { state } = useNavigation();
  const { user, address } = useLoaderData();
  let buttonName = "Save";
  if (state === "loading") buttonName = "Loading";
  if (state === "submitting") buttonName = "Submitting";
  return (
    <div className={styles.editPage}>
      <h2>Edit User</h2>
      <Form method="post" className={styles.form}>
        <UserImageUpload user={user} />
        <UserInfo user={user} />
        <AddressInfo styles={styles} address={address} />
        <div className={styles.btnGroup}>
          <Button disabled={state === "submitting" || state === "loading"}>
            {buttonName}
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
