import { useState } from "react";
import {
  states,
  statesWithCities,
  transformToOptions,
} from "../../../utils/states";
import Select from "../../UI/select";
import Input from "../../UI/input";
import addressStyle from "./address.module.css";
function AddressInfo({ styles, address = {} }) {
  const [cities, setCities] = useState([address.city]);
  const handleStateSelect = (e) => {
    const updatedCities = statesWithCities[e.target.value];
    setCities(updatedCities);
  };
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
        />
        <Input
          type="text"
          name="address.addressLine2"
          placeholder="no:1,street1..."
          label="Address Line 2"
          defaultValue={address.addressLine2}
        />
        <Select
          options={transformToOptions(states)}
          onChange={handleStateSelect}
          name="address.state"
          label="State"
          defaultValue={address.state}
        />
        <Select
          options={transformToOptions(cities)}
          name="address.city"
          label="City"
          defaultValue={address.city}
        />
        <Input
          type="number"
          name="address.zipcode"
          placeholder="600028"
          label="Pincode"
          defaultValue={address.zipcode}
        />
      </div>
    </>
  );
}

export default AddressInfo;
