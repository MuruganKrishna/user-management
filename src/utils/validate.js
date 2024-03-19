export const validateSignup = (user) => {
  let errors = {};
  if (!user.firstName || user.firstName === "")
    errors.firstName = "First Name not to be empty";
  if (!user.lastName || user.lastName === "")
    errors.lastName = "Last Name not to be empty";
  if (!user.email || user.email === "") errors.email = "Email not to be empty";
  if (!user.password || user.password === "")
    errors.password = "Password not to be empty";
  if (user.password !== user.confirmPassword)
    errors.confirmPassword = "Password Not match";
  if (!user.confirmPassword || user.confirmPassword === "")
    errors.confirmPassword = "Confirm Password not to be empty";
  return { errors, isError: Object.keys(errors).length > 0 };
};
