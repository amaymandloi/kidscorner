import React from "react";
import NavBar from "./Navbar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Typography } from "@mui/material";
import kc01 from "../assets/kc01.jpg";
import kc02 from "../assets/kc02.jpg";
import kc03 from "../assets/kc03.jpg";
import kc04 from "../assets/kc04.jpg";
import kc05 from "../assets/kc05.jpg";
import kc06 from "../assets/kc06.jpg";

export default function Gallery() {
  const imageList = [kc01, kc02, kc03, kc04, kc05, kc06];
  return (
    <Box>
      <NavBar />
      <ImageList cols={3}>
        {imageList.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item}
              alt={"Kids Corner"}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
