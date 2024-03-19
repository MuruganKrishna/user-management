import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import styles from "./login.module.css";
import Input from "../UI/input";
import Button from "../UI/button";
import { parseFormData } from "parse-nested-form-data";
import { authenticate } from "../../utils/authentication";
import { setUserToken } from "../../utils/user";
function Login() {
  const { state } = useNavigation();
  const actionData = useActionData();
  const isDisabled = state === "loading" || state === "submitting";
  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <h1>Login</h1>
        {actionData && (
          <p style={{ color: "red", fontSize: "0.75rem", textAlign: "center" }}>
            {actionData}
          </p>
        )}
        <Form className={styles.loginForm} method="post">
          <Input type="text" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
          <Button disabled={isDisabled}>
            {isDisabled ? "Submitting" : "Login"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
export const action = async ({ request }) => {
  const formData = parseFormData(await request.formData());
  const { data, message } = await authenticate(formData);
  if (!data) return message;
  setUserToken(data.id);
  return redirect("/user");
};
