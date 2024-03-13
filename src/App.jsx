import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import AppLayout from "./components/layout/AppLayout";
import Signup from "./components/signup";
import AdminLayout from "./components/layout/AdminLayout";
import Show from "./components/admin/show";
import Home from "./components/admin/home";
import New from "./components/admin/new";
import Edit from "./components/admin/edit";
import UserLayout from "./components/layout/UserLayout";
import UserHome from "./components/user/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "logout", element: <Signup /> },
      {
        path: "admins",
        element: <AdminLayout />,
        children: [
          {
            path: ":id",
            element: <Show />,
            children: [
              {
                path: "users",
                children: [
                  { index: true, element: <Home /> },
                  { path: ":id", element: <Show /> },
                  { path: "new", element: <New /> },
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
        children: [{ index: true, element: <UserHome /> }],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
