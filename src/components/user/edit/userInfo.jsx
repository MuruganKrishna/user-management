import Input from "../../UI/input";
import styles from "./address.module.css";
function UserInfo({ user }) {
  return (
    <>
      <h3>Personel Info</h3>
      <div className={styles.container}>
        <input
          type="hidden"
          name="user.id"
          style={{ display: "none" }}
          value={user.id || ""}
        />
        <input
          type="hidden"
          name="address.userId"
          style={{ display: "none" }}
          value={user.id || ""}
        />
        <Input
          type="text"
          name="user.firstName"
          placeholder="John"
          defaultValue={user.firstName}
          label="First Name"
        />
        <Input
          type="text"
          name="user.lastName"
          placeholder="Doe"
          defaultValue={user.lastName}
          label="Last Name"
        />
        <Input
          type="text"
          name="user.middleName"
          placeholder="Junior"
          defaultValue={user.middleName}
          label="Middle Name"
        />
        <Input
          type="email"
          name="user.email"
          placeholder="email@email.com"
          defaultValue={user.email}
          label="Email"
        />
      </div>
    </>
  );
}

export default UserInfo;
