import { Form } from "react-router-dom";
import styles from "./login.module.css";
import Input from "../UI/input";
import Button from "../UI/button";
function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <h1>Login</h1>
        <Form className={styles.loginForm} method="post">
          <Input type="text" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
          <Button>Login</Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
