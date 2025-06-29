import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewItem from "./pages/NewItem";
import MyProfiler from "./pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/item",
        element: <NewItem />,
      },
      {
        path: "/profile",
        element: <MyProfiler />,
      },
    ],
  },
]);

export default router;
