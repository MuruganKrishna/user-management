import styles from "../show/show.module.css";
import { Link, redirect, useLoaderData } from "react-router-dom";
import UserForm from "../form";
import { getUser, updateData } from "../../../utils/user";
import { getUserAddress } from "../../../utils/address";
import { parseFormData } from "parse-nested-form-data";
function Edit() {
  const { user, address } = useLoaderData();
  return (
    <>
      <div className={styles.info}>
        <h2>Personel Information</h2>
        <button>
          <Link to="..">Back</Link>
        </button>
      </div>
      <UserForm user={user} address={address} />
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
  const user = await updateData(formData.user, "users");
  const address = await updateData(formData.address, "addresses");
  console.log({ user, address });
  return redirect("..");
};
