import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Login, { action as loginAction } from "./components/login";
import AppLayout from "./components/layout/AppLayout";
import Signup, { action as signupAction } from "./components/signup";
import AdminLayout from "./components/layout/admin-layout";
import Show, { loader as showLoader } from "./components/admin/show";
import Home from "./components/admin/home";
import New, { action } from "./components/admin/new";
import Edit from "./components/admin/edit";
import UserLayout from "./components/layout/user-layout";
import UserHome, { loader as UserLoader } from "./components/user/home";
import UserEdit, {
  loader as userEditLoader,
  action as userEditAction,
} from "./components/user/edit";
import { getDataFromLocal } from "./utils/user";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login />, action: loginAction },
      { path: "signup", element: <Signup />, action: signupAction },
      {
        path: "logout",
        loader: () => {
          localStorage.setItem("userToken", undefined);
          return redirect("/login");
        },
      },
      {
        path: "admins",
        element: <AdminLayout />,
        children: [
          {
            path: ":id",
            children: [
              { index: true, element: <Show /> },
              {
                path: "users",
                children: [
                  {
                    index: true,
                    element: <Home />,
                    loader: () => getDataFromLocal("users"),
                  },
                  { path: ":id", element: <Show />, loader: showLoader },
                  {
                    path: "new",
                    element: <New />,
                    action: action,
                    id: "user-new",
                  },
                  { path: ":id/edit", element: <Edit /> },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          { index: true, element: <UserHome />, loader: UserLoader },
          {
            path: "edit",
            element: <UserEdit />,
            loader: userEditLoader,
            action: userEditAction,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
