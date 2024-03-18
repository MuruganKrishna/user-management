import { Form } from "react-router-dom";
import Input from "../input";
function AuthForm({ className }) {
  return (
    <Form className={className.loginForm} method="post">
      <Input type="text" name="email" label="Email" />
      <Input type="password" name="password" label="Password" />
      <button>Login</button>
    </Form>
  );
}

export default AuthForm;
