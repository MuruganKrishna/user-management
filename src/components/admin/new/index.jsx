import { Form, redirect, useNavigation } from "react-router-dom";
import Input from "../../UI/input";
import Select from "../../UI/select";
import {
  statesWithCities,
  transformToOptions,
  states,
} from "../../../utils/states";
import { useState } from "react";
import Button from "../../UI/button";
import { createUser } from "../../../utils/http";
import { parseFormData } from "parse-nested-form-data";

function New() {
  const [cities, setCities] = useState(["Please Select State First"]);
  const handleStateSelect = (e) => {
    const updatedCities = statesWithCities[e.target.value];
    setCities(updatedCities);
  };
  const { state } = useNavigation();
  return (
    <>
      <h2>User Creation</h2>
      <Form method="post">
        <Input type="file" name="user.userImage" />
        <p>Personel Name</p>
        <Input type="text" name="user.firstName" placeholder="John" />
        <Input type="text" name="user.lastName" placeholder="Doe" />
        <Input type="text" name="user.middleName" placeholder="Junior" />
        <Input type="email" name="user.email" placeholder="email@email.com" />
        <Input type="password" name="user.password" placeholder="Dev!123" />
        <Select
          options={[
            { value: "user", name: "User" },
            { value: "admin", name: "Admin" },
          ]}
          name="user.role"
        />
        <p>Address Information</p>
        <Input
          type="text"
          name="address.addressLine1"
          placeholder="no:1,street1..."
        />
        <Input
          type="text"
          name="address.addressLine2"
          placeholder="no:1,street1..."
        />
        <Select
          options={transformToOptions(states)}
          onChange={handleStateSelect}
          name="address.state"
        />
        <Select options={transformToOptions(cities)} name="address.city" />
        <Input type="number" name="address.zipcode" placeholder="600028" />
        <Button disabled={state === "submitting" || state === "loading"}>
          {state === "submitting" || state === "loading" ? "Saving..." : "Save"}
        </Button>
      </Form>
    </>
  );
}

export default New;

export const action = async ({ params, request }) => {
  const formData = await request.formData();
  await createUser(parseFormData(formData));
  return redirect(`/admins/${params.id}/users`);
};
