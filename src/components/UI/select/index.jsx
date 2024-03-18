import styles from "../input/input.module.css";
function Select({ options, label, className, ...props }) {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={props.name}>{label}</label>
      <select id={props.name} className={className} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
