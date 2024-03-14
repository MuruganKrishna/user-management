import styles from "./login.module.css";
import AuthForm from "../UI/authform";
function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <h1>Login Page</h1>
        <AuthForm className={styles} isSignUP={false} />
      </div>
    </div>
  );
}

export default Login;
