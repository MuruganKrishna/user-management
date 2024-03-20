import defaultImage from "../../../assets/images/user-icon.png";
import imgStyle from "./user-image.module.css";
function ShowUserImage({ userImage, ...props }) {
  return (
    <>
      {userImage && (
        <img
          className={imgStyle.img}
          src={`/demo-images/${userImage}`}
          alt="userImage"
          {...props}
        />
      )}
      {!userImage && (
        <img
          className={imgStyle.img}
          src={defaultImage}
          alt="userImage"
          {...props}
        />
      )}
    </>
  );
}

export default ShowUserImage;
