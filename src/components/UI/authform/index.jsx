import { Form } from "react-router-dom";
import Input from "../input";
function AuthForm({ isSignUP, className }) {
  return (
    <Form className={className.loginForm}>
      <Input type="text" name="email" label="Email" />
      {!isSignUP && <Input type="password" name="password" label="Password" />}
      {isSignUP && (
        <>
          <Input type="password" name="newPassword" label="New Password" />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
        </>
      )}
      <button>Login</button>
    </Form>
  );
}

export default AuthForm;
