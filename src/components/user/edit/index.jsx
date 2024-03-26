import {
  Form,
  Link,
  redirect,
  useActionData,
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
import { validateEdit } from "../../../utils/validate";
import LoadingButton from "../../UI/loading-button";
import LoadingLink from "../../UI/loading-link";

function Edit() {
  const { state } = useNavigation();
  let { user, address } = useLoaderData();
  const actionData = useActionData();
  if (actionData && actionData.user) user = actionData.user;
  if (actionData && actionData.address) address = actionData.address;
  return (
    <div className={styles.editPage}>
      <h2>Edit User</h2>
      <Form method="post" className={styles.form}>
        <UserImageUpload user={user} />
        <UserInfo user={user} error={actionData && actionData.userError} />
        <AddressInfo
          styles={styles}
          address={address}
          error={actionData && actionData.addressError}
        />
        <div className={styles.btnGroup}>
          <LoadingButton
            idleText={"Save"}
            submittingText={"Editing"}
            loadingText={"Loading"}
            state={state}
          />
          <LoadingLink
            idleText={"Back"}
            loadingText="Loading"
            state={state}
            to=".."
          />
        </div>
      </Form>
    </div>
  );
}

export default Edit;
export const action = async ({ params, request }) => {
  const formData = parseFormData(await request.formData());
  const { addressError, userError, isError } = validateEdit(
    formData.user,
    formData.address
  );
  if (isError)
    return {
      addressError,
      userError,
      user: formData.user,
      address: formData.address,
    };
  await updateData(formData.user, "users");
  await updateData(formData.address, "addresses");
  return redirect("/user");
};
export const loader = async () => {
  const user = await getCurrentUser();
  const address = await getUserAddress(user.id);
  return { user, address };
};
