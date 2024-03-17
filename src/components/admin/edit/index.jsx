import styles from "../show/show.module.css";
import userProfile from "../../../assets/images/user-icon.png";
function Edit() {
  return (
    <>
      <div className={styles.info}>
        <h2>Personel Information</h2>
        <p>saving information</p>
      </div>
      <div className={styles.photoContainer}>
        <div className={styles.profilePhoto}>
          <div className={styles.userProfile}>
            {/* <div></div> */}
            <img src={userProfile} alt="user Profile" />
          </div>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div>
          <p>First Name</p>
          <p className={styles.userValue}>Araft</p>
        </div>
        <div>
          <p>Last Name</p>
          <p className={styles.userValue}>Ross</p>
        </div>
        <div>
          <p>Middle Name</p>
          <p className={styles.userValue}>NOthin</p>
        </div>
        <div>
          <p>Email</p>
          <p className={styles.userValue}>email@email.com</p>
        </div>
        <div>
          <p>Phone Number</p>
          <p className={styles.userValue}>+91 9080909090</p>
        </div>
        <div>
          <p>Country</p>
          <p className={styles.userValue}>India</p>
        </div>
        <div>
          <p>City</p>
          <p className={styles.userValue}>Chennai</p>
        </div>
        <div>
          <p>Zipcode</p>
          <p className={styles.userValue}>605201</p>
        </div>
      </div>
    </>
  );
}

export default Edit;
