import { createHashRouter } from "react-router-dom";
import Home from "../Component/Home";
import Gallery from "../Component/Gallery";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);
