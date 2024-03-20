import styles from "../show/show.module.css";
import { redirect, useActionData, useLoaderData } from "react-router-dom";
import UserForm from "../form";
import { getUser, updateData } from "../../../utils/user";
import { getUserAddress } from "../../../utils/address";
import { parseFormData } from "parse-nested-form-data";
import UseCurrentUser from "../../../hooks/useCurrenUser";
import BackButton from "../../shared/back-button";
import { validateEdit } from "../../../utils/validate";
function Edit() {
  const { user, address } = useLoaderData();
  UseCurrentUser();
  const error = useActionData();
  return (
    <>
      <div className={styles.info}>
        <h2>Edit User Information</h2>
        <BackButton />
      </div>
      <UserForm user={user} address={address} error={error} />
    </>
  );
}

export default Edit;
export const loader = async ({ params }) => {
  const user = await getUser(params.id);
  const address = await getUserAddress(params.id);
  return { user, address };
};
export const action = async ({ request }) => {
  const formData = parseFormData(await request.formData());
  const { addressError, userError, isError } = validateEdit(
    formData.user,
    formData.address
  );
  if (isError) return { addressError, userError };
  const user = await updateData(formData.user, "users");
  const address = await updateData(formData.address, "addresses");
  console.log({ user, address });
  return redirect("..");
};
