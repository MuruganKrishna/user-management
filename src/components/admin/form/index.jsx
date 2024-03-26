import { useNavigation } from "react-router";
import { Form } from "react-router-dom";
import Button from "../../UI/button";
import Select from "../../UI/select";
import Input from "../../UI/input";
import UserImageUpload from "../../user/edit/userImageUpload";
import styles from "./form.module.css";
import AddressState from "../../shared/address-state";

function UserForm({ user = {}, address = {}, error }) {
  const { state } = useNavigation();
  return (
    <>
      <Form method="post" className={styles.form}>
        <UserImageUpload user={user} />
        <input
          type="hidden"
          name="user.id"
          defaultValue={user.id}
          style={{ display: "none" }}
        />
        <p>Personel Information</p>
        <div className={styles.info}>
          <Input
            type="text"
            name="user.firstName"
            placeholder="John"
            defaultValue={user.firstName}
            error={error && error.userError}
          />
          <Input
            type="text"
            name="user.lastName"
            placeholder="Doe"
            defaultValue={user.lastName}
            error={error && error.userError}
          />
          <Input
            type="text"
            name="user.middleName"
            placeholder="Junior"
            defaultValue={user.middleName}
            error={error && error.userError}
          />
          <Input
            type="email"
            name="user.email"
            placeholder="email@email.com"
            defaultValue={user.email}
            error={error && error.userError}
          />
          <Input
            type="password"
            name="user.password"
            placeholder="Dev!123"
            defaultValue={user.password}
            error={error && error.userError}
          />
          <Select
            options={[
              { value: "user", name: "User" },
              { value: "admin", name: "Admin" },
            ]}
            name="user.role"
            defaultValue={user.role}
          />
        </div>

        <p>Address Information</p>
        <div className={styles.info}>
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
            error={error && error.addressError}
          />
          <Input
            type="text"
            name="address.addressLine2"
            placeholder="no:1,street1..."
            defaultValue={address.addressLine2}
            error={error && error.addressError}
          />
          <AddressState
            state={address.state}
            city={address.city}
            error={error && error.addressError}
          />
          <Input
            type="number"
            name="address.zipcode"
            placeholder="600028"
            defaultValue={address.zipcode}
            error={error && error.addressError}
          />
        </div>

        <Button
          disabled={state === "submitting" || state === "loading"}
          className={styles.saveButton}
        >
          {state === "submitting" ? "Saving..." : "Save"}
        </Button>
      </Form>
    </>
  );
}

export default UserForm;
