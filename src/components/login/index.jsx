import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import styles from "./login.module.css";
import Input from "../UI/input";
import Button from "../UI/button";
import { parseFormData } from "parse-nested-form-data";
import { authenticate } from "../../utils/auth";
function Login() {
  const data = useActionData();
  const { state } = useNavigation();
  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <h1>Login</h1>
        {data && <p>{data}</p>}
        <Form className={styles.loginForm} method="post">
          <Input type="text" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
          <Button disabled={state === "submitting" || state === "loading"}>
            {state === "submitting" ? "Loging..." : "Login"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
export const action = async ({ request }) => {
  const formData = parseFormData(await request.formData());
  const response = await authenticate(formData);
  if (response.status === 200) {
    localStorage.setItem("userToken", response.data);
    return redirect("/user");
  }
  return response.message;
};
