export const validateUser = (user) => {
  let errors = {};
  if (!user.firstName || user.firstName === "")
    errors.firstName = "First Name not to be empty";
  if (!user.lastName || user.lastName === "")
    errors.lastName = "Last Name not to be empty";
  if (!user.email || user.email === "") errors.email = "Email not to be empty";
  if (user && user.password !== undefined && user.password.length < 6)
    errors.password = "Password Must be greater than 6 charector";
  return errors;
};
const validateAddress = (address) => {
  let errors = {};
  if (!address.addressLine1 || address.addressLine1 === "")
    errors.addressLine1 = "Address Line 1 not to be empty";
  if (!address.addressLine2 || address.addressLine2 === "")
    errors.addressLine2 = "Address Line 2 not to be empty";
  if (!address.state || address.state === "--")
    errors.state = "state not to be empty";
  if (!address.city || address.city === "--")
    errors.city = "City not to be empty";
  if (!address.zipcode || address.zipcode.length !== 6)
    errors.zipcode = "Not a Valid ZipCode";
  if (!address.zipcode || address.zipcode === "")
    errors.zipcode = "Zipcode not to be empty";
  return errors;
};
export const validateSignup = (user) => {
  const errors = validateUser(user);
  if (!user.password || user.password === "")
    errors.password = "Password not to be empty";
  if (user.password !== user.confirmPassword)
    errors.confirmPassword = "Password Not match";
  if (!user.confirmPassword || user.confirmPassword === "")
    errors.confirmPassword = "Confirm Password not to be empty";
  return { errors, isError: Object.keys(errors).length > 0 };
};
export const validateEdit = (user, address) => {
  const addressError = validateAddress(address);
  const userError = validateUser(user);
  Object.keys(addressError).forEach((key) => {
    addressError[`address.${key}`] = addressError[key];
    delete addressError[key];
  });
  Object.keys(userError).forEach((key) => {
    userError[`user.${key}`] = userError[key];
    delete userError[key];
  });
  return {
    addressError,
    userError,
    isError:
      Object.keys(addressError).length > 0 || Object.keys(userError).length > 0,
  };
};
