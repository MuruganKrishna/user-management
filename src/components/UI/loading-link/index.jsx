import { useState } from "react";
import { Link } from "react-router-dom";

function LoadingLink({ loadingText, idleText, state, ...props }) {
  const [isClicked, setIsClicked] = useState(false);
  let linkText = idleText;
  if (isClicked && state === "loading") linkText = loadingText;
  return (
    <Link {...props} onClick={() => setIsClicked(true)}>
      {linkText}
    </Link>
  );
}

export default LoadingLink;
