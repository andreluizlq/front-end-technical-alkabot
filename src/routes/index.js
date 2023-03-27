import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

const router = createBrowserRouter([
  {
    path: "/front-end-technical-alkabot",
    element: <Home />,
  },
  {
    path: "/perfil/:userId",
    element: <Perfil />,
  },
]);

export default router;
