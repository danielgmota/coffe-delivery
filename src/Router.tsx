import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Confirmed } from "./pages/Confirmed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "confirmed",
    element: <Confirmed />,
  },
]);
