import AuthForm from "../UI/authform";
import styles from "../login/login.module.css";
function Signup() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        <h1>Sign Up Page</h1>
        <AuthForm className={styles} isSignUP={true} />
      </div>
    </div>
  );
}

export default Signup;
