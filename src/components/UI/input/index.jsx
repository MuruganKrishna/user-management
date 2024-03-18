import styles from "./input.module.css";
function Input({ className, label, ...props }) {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} className={className} {...props} />
    </div>
  );
}

export default Input;
