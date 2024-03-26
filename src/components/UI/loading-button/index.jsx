import { useState } from "react";

function LoadingButton({
  loadingText,
  idleText,
  submittingText,
  className,
  onClick = () => {},
  state,
  ...props
}) {
  const [isClicked, setIsClicked] = useState(false);
  let buttonText = idleText;
  if (isClicked && state === "loading") buttonText = loadingText;
  if (isClicked && state === "submitting") buttonText = submittingText;
  const handleClick = (e) => {
    setIsClicked(true);
    onClick(e);
  };
  return (
    <>
      <button className={className} {...props} onClick={(e) => handleClick(e)}>
        {buttonText}
      </button>
    </>
  );
}

export default LoadingButton;
