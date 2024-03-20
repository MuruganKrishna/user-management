import { Form, Link, redirect, useActionData } from "react-router-dom";
import styles from "../login/login.module.css";
import formStyles from "./signup.module.css";
import Input from "../UI/input";
import Button from "../UI/button";
import { parseFormData } from "parse-nested-form-data";
import { createUser, setUserToken } from "../../utils/user";
import { validateSignup } from "../../utils/validate";
function Signup() {
  const error = useActionData();
  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <h1>Sign Up</h1>
        {/* <AuthForm className={styles} isSignUP={false} /> */}
        <Form className={formStyles.loginForm} method="post">
          <div className={formStyles.inputSection}>
            <Input
              type="text"
              name="firstName"
              placeholder="John"
              label="First Name"
              error={error}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Doe"
              label="Last Name"
              error={error}
            />
            <Input
              type="text"
              name="middleName"
              placeholder="Junior"
              label="Middle Name"
              error={error}
            />
            <Input
              type="email"
              name="email"
              placeholder="John@email.com"
              label="Email"
              error={error}
            />
            <Input
              type="password"
              name="password"
              placeholder="John@123"
              label="Password"
              error={error}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="John@123"
              label="Confirm Password"
              error={error}
            />
          </div>
          <Button>Sign Up</Button>
        </Form>
        <Link to="/login">for Login</Link>
      </div>
    </div>
  );
}

export default Signup;
export const action = async ({ request }) => {
  const formData = parseFormData(await request.formData());
  const { errors, isError } = validateSignup(formData);
  if (isError) return errors;
  const { status, data, message } = await createUser(formData);
  if (status !== 201) return alert(message);
  if (status === 201) setUserToken(data.id);
  return redirect("/user");
};
