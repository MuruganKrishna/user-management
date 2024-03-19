import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login, { action as loginAction } from "./components/login";
import AppLayout from "./components/layout/AppLayout";
import Signup, { action as signupAction } from "./components/signup";
import AdminLayout from "./components/layout/admin-layout";
import Show, { loader as showLoader } from "./components/admin/show";
import Home from "./components/admin/home";
import New, { action } from "./components/admin/new";
import Edit, {
  loader as editAdminLoader,
  action as editAdminAction,
} from "./components/admin/edit";
import UserLayout from "./components/layout/user-layout";
import UserHome, { loader as UserLoader } from "./components/user/home";
import UserEdit, {
  loader as userEditLoader,
  action as userEditAction,
} from "./components/user/edit";
import { getDataFromLocal } from "./utils/user";
import ProtectedRoute, { ProtectedUserRoute } from "./utils/protectedRoute";
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
              {
                index: true,
                element: (
                  <ProtectedRoute>
                    <Show />
                  </ProtectedRoute>
                ),
              },
              {
                path: "users",
                children: [
                  {
                    index: true,
                    element: (
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    ),
                    loader: () => getDataFromLocal("users"),
                  },
                  {
                    path: ":id",
                    element: (
                      <ProtectedRoute>
                        <Show />
                      </ProtectedRoute>
                    ),
                    loader: showLoader,
                  },
                  {
                    path: "new",
                    element: (
                      <ProtectedRoute>
                        <New />
                      </ProtectedRoute>
                    ),
                    action: action,
                    id: "user-new",
                  },
                  {
                    path: ":id/edit",
                    element: (
                      <ProtectedRoute>
                        <Edit />
                      </ProtectedRoute>
                    ),
                    loader: editAdminLoader,
                    action: editAdminAction,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "user",
        element: (
          <ProtectedUserRoute>
            <UserLayout />
          </ProtectedUserRoute>
        ),
        // loader: checkUserToken,
        children: [
          {
            index: true,
            element: (
              <ProtectedUserRoute>
                <UserHome />
              </ProtectedUserRoute>
            ),
            loader: UserLoader,
          },
          {
            path: "edit",
            element: (
              <ProtectedUserRoute>
                <UserEdit />
              </ProtectedUserRoute>
            ),
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
