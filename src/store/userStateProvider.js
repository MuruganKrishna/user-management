import { createContext } from "react";
import { useNavigate } from "react-router";

export const UserState = createContext({
  setLoginState: () => {},
});
function UserSateProvider({ children }) {
  const navigate = useNavigate();
  const setLoginState = (state) => {
    if (state !== "login") {
      navigate("/logout");
    }
  };

  return (
    <UserState.Provider value={{ setLoginState }}>
      {children}
    </UserState.Provider>
  );
}

export default UserSateProvider;
