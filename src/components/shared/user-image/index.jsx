import defaultImage from "../../../assets/images/user-icon.png";
import imgStyle from "./user-image.module.css";
function ShowUserImage({ userImage, ...props }) {
  return (
    <>
      <img
        className={imgStyle.img}
        src={userImage ? `/demo-images/${userImage}` : defaultImage}
        alt="userImage"
        {...props}
      />
    </>
  );
}

export default ShowUserImage;
