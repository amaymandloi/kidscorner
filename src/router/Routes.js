import { createHashRouter } from "react-router-dom";
import Home from "../Component/Home";
import Gallery from "../Component/Gallery";
import AboutUs from "../Component/AboutUs";
import ContactUs from "../Component/ContactUs";
import Admission from "../Component/Admission";

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
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/admission",
    element: <Admission />,
  },
]);
