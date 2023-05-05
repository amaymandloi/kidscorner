import { createHashRouter } from "react-router-dom";
import Home from "../Component/Home";
import Gallery from "../Component/Gallery";
import AboutUs from "../Component/AboutUs";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);
