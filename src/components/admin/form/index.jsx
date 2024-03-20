import { useState } from "react";
import {
  states,
  statesWithCities,
  transformToOptions,
} from "../../../utils/states";
import { useNavigation } from "react-router";
import { Form } from "react-router-dom";
import Button from "../../UI/button";
import Select from "../../UI/select";
import Input from "../../UI/input";
import UserImageUpload from "../../user/edit/userImageUpload";

function UserForm({ user = {}, address = {} }) {
  const [cities, setCities] = useState([
    address.city || "Please Select the city",
  ]);
  const handleStateSelect = (e) => {
    const updatedCities = statesWithCities[e.target.value];
    setCities(updatedCities);
  };
  const { state } = useNavigation();
  return (
    <>
      <Form method="post">
        <UserImageUpload user={user} />
        <input
          type="hidden"
          name="user.id"
          defaultValue={user.id}
          style={{ display: "none" }}
        />
        <p>Personel Name</p>
        <Input
          type="text"
          name="user.firstName"
          placeholder="John"
          defaultValue={user.firstName}
        />
        <Input
          type="text"
          name="user.lastName"
          placeholder="Doe"
          defaultValue={user.lastName}
        />
        <Input
          type="text"
          name="user.middleName"
          placeholder="Junior"
          defaultValue={user.middleName}
        />
        <Input
          type="email"
          name="user.email"
          placeholder="email@email.com"
          defaultValue={user.email}
        />
        <Input
          type="password"
          name="user.password"
          placeholder="Dev!123"
          defaultValue={user.password}
        />
        <Select
          options={[
            { value: "user", name: "User" },
            { value: "admin", name: "Admin" },
          ]}
          name="user.role"
          defaultValue={user.role}
        />
        <p>Address Information</p>
        <input
          type="hidden"
          name="address.id"
          defaultValue={address.id}
          style={{ display: "none" }}
        />
        <input
          type="hidden"
          name="address.userId"
          defaultValue={user.id}
          style={{ display: "none" }}
        />
        <Input
          type="text"
          name="address.addressLine1"
          placeholder="no:1,street1..."
          defaultValue={address.addressLine1}
        />
        <Input
          type="text"
          name="address.addressLine2"
          placeholder="no:1,street1..."
          defaultValue={address.addressLine2}
        />
        <Select
          options={transformToOptions(states)}
          onChange={handleStateSelect}
          name="address.state"
          defaultValue={address.state}
        />
        <Select
          options={transformToOptions(cities)}
          name="address.city"
          defaultValue={address.city}
        />
        <Input
          type="number"
          name="address.zipcode"
          placeholder="600028"
          defaultValue={address.zipcode}
        />
        <Button disabled={state === "submitting" || state === "loading"}>
          {state === "submitting" ? "Saving..." : "Save"}
        </Button>
      </Form>
    </>
  );
}

export default UserForm;
