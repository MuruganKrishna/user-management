import { useState } from "react";
import {
  states,
  statesWithCities,
  transformToOptions,
} from "../../../utils/states";
import Select from "../../UI/select";

function AddressState({ state, city, error }) {
  const [cities, setCities] = useState([
    city || "Please Select the state first",
  ]);
  const handleStateSelect = (e) => {
    const updatedCities = statesWithCities[e.target.value];
    setCities(updatedCities);
  };
  return (
    <>
      <Select
        options={transformToOptions(states)}
        onChange={handleStateSelect}
        name="address.state"
        defaultValue={state}
        error={error}
        label={"State"}
      />
      <Select
        options={transformToOptions(cities)}
        name="address.city"
        defaultValue={city}
        error={error}
        label={"City"}
      />
    </>
  );
}

export default AddressState;
