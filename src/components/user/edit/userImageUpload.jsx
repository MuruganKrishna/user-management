import { useRef, useState } from "react";
import ShowUserImage from "../../shared/user-image";
function UserImageUpload({ user = {} }) {
  const imgRef = useRef();
  const [userImage, setUserImage] = useState(user.userImage || "");
  const handleImage = () => {
    imgRef.current.click();
  };
  const handleImageChange = (e) => {
    setUserImage(e.target.files[0].name);
  };
  return (
    <>
      <ShowUserImage userImage={userImage} onClick={handleImage} />
      <input
        ref={imgRef}
        style={{ display: "none" }}
        type="file"
        onChange={handleImageChange}
      />
      <input
        type="hidden"
        style={{ display: "none" }}
        name="user.userImage"
        value={userImage}
      />
    </>
  );
}

export default UserImageUpload;
