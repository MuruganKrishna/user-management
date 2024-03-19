import { useRef, useState } from "react";
import userDefaultImage from "../../../assets/images/user-icon.png";
function UserImageUpload({ user = {} }) {
  const imgRef = useRef();
  debugger;
  const [userImage, setUserImage] = useState(user.userImage || "");
  const handleImage = () => {
    imgRef.current.click();
  };
  const handleImageChange = (e) => {
    setUserImage(e.target.files[0].name);
  };
  return (
    <>
      {userImage && (
        <img
          src={`/demo-images/${userImage}`}
          alt="userImage"
          onClick={handleImage}
        />
      )}
      {!userImage && (
        <img src={userDefaultImage} alt="defaultImage" onClick={handleImage} />
      )}
      <input
        ref={imgRef}
        style={{ display: "none" }}
        type="file"
        name="user.userImage"
        onChange={handleImageChange}
      />
    </>
  );
}

export default UserImageUpload;
