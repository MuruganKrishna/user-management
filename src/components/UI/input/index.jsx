import styles from "./input.module.css";
function Input({ className, error, label, ...props }) {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} className={className} {...props} />
      {error && error[props.name] && <p>{error[props.name]}</p>}
    </div>
  );
}

export default Input;
