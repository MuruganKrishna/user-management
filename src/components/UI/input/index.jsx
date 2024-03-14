function Input({ className, label, ...props }) {
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input className={className} {...props} />
    </>
  );
}

export default Input;
