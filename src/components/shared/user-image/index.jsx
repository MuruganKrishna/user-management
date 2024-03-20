import defaultImage from "../../../assets/images/user-icon.png";
function ShowUserImage({ userImage, ...props }) {
  return (
    <>
      {userImage && (
        <img src={`/demo-images/${userImage}`} alt="userImage" {...props} />
      )}
      {!userImage && <img src={defaultImage} alt="userImage" {...props} />}
    </>
  );
}

export default ShowUserImage;
