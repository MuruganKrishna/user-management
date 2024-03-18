import { Form, redirect } from "react-router-dom";
import styles from "../login/login.module.css";
import formStyles from "./signup.module.css";
import Input from "../UI/input";
import Button from "../UI/button";
import { parseFormData } from "parse-nested-form-data";
import { createUser } from "../../utils/user";
function Signup() {
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
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Doe"
              label="Last Name"
            />
            <Input
              type="text"
              name="middleName"
              placeholder="Junior"
              label="Middle Name"
            />
            <Input
              type="email"
              name="email"
              placeholder="John@email.com"
              label="Email"
            />
            <Input
              type="password"
              name="password"
              placeholder="John@123"
              label="Password"
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="John@123"
              label="Confirm Password"
            />
          </div>
          <Button>Sign Up</Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
export const action = async ({ request, params }) => {
  const formData = parseFormData(await request.formData());
  const user = await createUser(formData);
  localStorage.setItem("userToken", user.data.id);
  return redirect("/user");
};
