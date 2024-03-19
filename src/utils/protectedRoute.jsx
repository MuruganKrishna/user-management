import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserState } from "../store/userStateProvider";
import { getUserToken } from "./user";

function ProtectedRoute({ children }) {
  const { currentUser } = useContext(UserState);
  const navigate = useNavigate();
  const location = useLocation();
  if (currentUser && currentUser.role === "admin") return children;
  if (currentUser && currentUser.role !== "admin")
    navigate("/login", { state: { from: location } });
  return;
}
export const ProtectedUserRoute = ({ children }) => {
  const userToken = getUserToken();
  const navigate = useNavigate();
  const location = useLocation();
  if (userToken) return children;
  navigate("/login", { state: { from: location } });
  return;
};
export default ProtectedRoute;
