import { useState } from "react";
import styles from "./input.module.css";
function Input({ className, error, label, onChange = () => {}, ...props }) {
  const [currentError, setCurrentError] = useState(error);
  const handleOnchange = (e) => {
    console.log(props.required, "this is the required");
    if (e.target.value.length <= 0 && props.required)
      setCurrentError({ [props.name]: "Not to be empty" });
    else setCurrentError({});
    onChange(e);
  };
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={props.name}>{label}</label>
      <input
        id={props.name}
        className={className}
        {...props}
        onChange={(e) => handleOnchange(e)}
      />
      {currentError && currentError[props.name] && (
        <p>{currentError[props.name]}</p>
      )}
    </div>
  );
}

export default Input;
