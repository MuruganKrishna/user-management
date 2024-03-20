import { useContext, useEffect } from "react";
import { UserState } from "../store/userStateProvider";

function UseCurrentUser() {
  const { updateCurrentLoginUser } = useContext(UserState);
  useEffect(() => {
    updateCurrentLoginUser();
  }, []);
  return null;
}

export default UseCurrentUser;
