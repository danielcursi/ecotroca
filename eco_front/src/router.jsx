import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewItem from "./pages/NewItem";
import MyProfiler from "./pages/MyProfile";
import ItemList from "./pages/ItemList";
import RegisterItem from "./pages/RegisterItem";
import NewUser from "./pages/NewUser";

import AlterarSenha from "./pages/AlterarSenha";
import Inbox from "./pages/Inbox";

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
        path: "/item",
        children: [
          {
            index: true,
            element: <ItemList />, // Componente que lista todos os itens
          },
          {
            path: "/item/:id",
            element: <NewItem />, // Componente que mostra o item pelo ID
          },
          {
            path: "/item/register",
            element: <RegisterItem />, // Componente que cadastra o item
          },
        ],
      },
      {
        path: "/profile",
        element: <MyProfiler />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/newUser",
    element: <NewUser />,
  },
  {
    path: "/AlterarSenha",
    element: <AlterarSenha />,
  },
  {
    path: "/Inbox",
    element: <Inbox />,
  }
]);

export default router;
