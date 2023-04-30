import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Homes from "../Pages/Home/Home/Homes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homes></Homes>,
      },
    ],
  },
]);

export default router;
