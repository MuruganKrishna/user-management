import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { clearUserToken, getCurrentUser } from "../utils/user";

export const UserState = createContext({
  setLoginState: () => {},
  currentUser: null,
  isAdmin: false,
  setIsAdmin: () => {},
  setCurrentUser: () => {},
});
function UserSateProvider({ children }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const setLoginState = (state) => {
    if (state !== "login") {
      clearUserToken();
      setCurrentUser(null);
      return navigate("/login");
    }
    return;
  };
  useEffect(() => {
    getCurrentUser().then((data) => {
      if (!data) return navigate("/login");
      setCurrentUser(data);
      setIsAdmin(data.role === "admin");
    });
  }, [navigate]);

  return (
    <UserState.Provider
      value={{
        setLoginState,
        currentUser,
        isAdmin,
        setIsAdmin,
        setCurrentUser,
      }}
    >
      {children}
    </UserState.Provider>
  );
}

export default UserSateProvider;
