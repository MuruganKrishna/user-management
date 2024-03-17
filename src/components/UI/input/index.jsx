function Input({ className, label, ...props }) {
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} className={className} {...props} />
    </>
  );
}

export default Input;
