import { Link, redirect } from "react-router-dom";
import { createUser } from "../../../utils/user";
import { parseFormData } from "parse-nested-form-data";
import { createAddress } from "../../../utils/address";
import UserForm from "../form";
import BackButton from "../../shared/back-button";
import styles from "../show/show.module.css";

function New() {
  return (
    <>
      <div className={styles.info}>
        <h2>Personel Information</h2>
        <BackButton />
      </div>
      <UserForm />
    </>
  );
}

export default New;

export const action = async ({ params, request }) => {
  const formData = parseFormData(await request.formData());
  // await createUserWithAddress(parseFormData(formData));
  const response = await createUser(formData.user);
  await createAddress(response.data.id, formData.address);
  return redirect(`/admins/${params.id}/users`);
};
