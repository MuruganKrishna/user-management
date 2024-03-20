import styles from "../input/input.module.css";
function Select({ options, error, label, className, ...props }) {
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
      {error && error[props.name] && <p>{error[props.name]}</p>}
    </div>
  );
}

export default Select;
