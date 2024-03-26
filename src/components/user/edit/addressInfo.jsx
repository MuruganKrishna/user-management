import Input from "../../UI/input";
import addressStyle from "./address.module.css";
import AddressState from "../../shared/address-state";
function AddressInfo({ styles, address = {}, error }) {
  return (
    <>
      <h3>User Address</h3>
      {!address && <p>No Address found Fill the below Fields</p>}
      <div className={`${styles.addressInfo} ${addressStyle.container}`}>
        <Input
          type="text"
          name="address.addressLine1"
          placeholder="no:1,street1..."
          label="Address Line 1"
          defaultValue={address.addressLine1}
          error={error}
        />
        <Input
          type="text"
          name="address.addressLine2"
          placeholder="no:1,street1..."
          label="Address Line 2"
          defaultValue={address.addressLine2}
          error={error}
        />
        <AddressState state={address.state} city={address.city} error={error} />
        <Input
          type="number"
          name="address.zipcode"
          placeholder="600028"
          label="Pincode"
          defaultValue={address.zipcode}
          error={error}
        />
      </div>
    </>
  );
}

export default AddressInfo;
