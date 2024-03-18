import { createContext, useState } from "react";

export const UserState = createContext({
  isUserLoggedIn: false,
  setLoginState: () => {},
});
function UserSateProvider({ children }) {
  const userToken = localStorage.getItem("userToken") ? true : false;
  const [userState, setUserState] = useState(userToken);
  const setLoginState = (state) => {
    if (state === "login") {
      setUserState(true);
    } else {
      localStorage.clear();
      setUserState(false);
    }
  };

  return (
    <UserState.Provider value={{ isUserLoggedIn: userState, setLoginState }}>
      {children}
    </UserState.Provider>
  );
}

export default UserSateProvider;
