function Select({ options, label, className, ...props }) {
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <select id={props.name} className={className} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
