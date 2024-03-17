import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import AppLayout from "./components/layout/AppLayout";
import Signup from "./components/signup";
import AdminLayout from "./components/layout/admin-layout";
import Show, { loader as showLoader } from "./components/admin/show";
import Home from "./components/admin/home";
import New, { action } from "./components/admin/new";
import Edit from "./components/admin/edit";
import UserLayout from "./components/layout/UserLayout";
import UserHome from "./components/user/home";
import UserEdit from "./components/user/edit";
import { getDataFromLocal } from "./utils/http";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        path: "logout",
        loader: () => {
          console.log("logged out");
          return null;
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
          { index: true, element: <UserHome /> },
          { path: "edit", element: <UserEdit /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
