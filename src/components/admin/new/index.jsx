import { Link, redirect } from "react-router-dom";
import { createUser } from "../../../utils/user";
import { parseFormData } from "parse-nested-form-data";
import { createAddress } from "../../../utils/address";
import UserForm from "../form";

function New() {
  return (
    <>
      <div>
        <h2>User Creation</h2>
        <button>
          <Link to="..">Back</Link>
        </button>
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
