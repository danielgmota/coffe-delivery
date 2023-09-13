import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
]);
