import React from "react";
import NavBar from "./Navbar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, ImageListItemBar, Typography } from "@mui/material";
import Footer from "./Footer";
import kc01 from "../assets/galleryImage/kc01.png";
import kc02 from "../assets/galleryImage/kc02.png";
import kc03 from "../assets/galleryImage/kc03.png";
import kc04 from "../assets/galleryImage/kc04.png";
import kc05 from "../assets/galleryImage/kc05.png";
import kc06 from "../assets/galleryImage/kc06.png";
import kc07 from "../assets/galleryImage/kc07.png";
import kc08 from "../assets/galleryImage/kc08.png";
import kc09 from "../assets/galleryImage/kc09.png";
import kc10 from "../assets/galleryImage/kc10.png";
import kc11 from "../assets/galleryImage/kc11.png";
import kc12 from "../assets/galleryImage/kc12.png";
import kc13 from "../assets/galleryImage/kc13.png";
import kc14 from "../assets/galleryImage/kc14.png";
import kc15 from "../assets/galleryImage/kc15.png";
import kc16 from "../assets/galleryImage/kc16.png";
import kc17 from "../assets/galleryImage/kc17.png";
import kc18 from "../assets/galleryImage/kc18.png";

export default function Gallery() {
  const imageList = [
    {
      img: kc01,
      title: "Temple Visit",
      date: "@bkristastucchio",
    },
    {
      img: kc02,
      title: "Temple Visit",
      date: "@bkristastucchio",
    },
    {
      img: kc14,
      title: "Temple Visit",
      date: "@bkristastucchio",
    },
    {
      img: kc03,
      title: "Temple Visit",
      date: "@bkristastucchio",
    },
    {
      img: kc04,
      title: "Temple Visit",
      date: "@bkristastucchio",
    },
    {
      img: kc15,
      title: "Temple Visit",
      date: "@bkristastucchio",
    },
    {
      img: kc05,
      title: "Holi Celebration",
      date: "@bkristastucchio",
    },
    {
      img: kc06,
      title: "Holi Celebration",
      date: "@bkristastucchio",
    },
    {
      img: kc07,
      title: "Independence Day Celebration",
      date: "@bkristastucchio",
    },
    {
      img: kc08,
      title: "Jungle Safari Day",
      date: "@bkristastucchio",
    },
    {
      img: kc10,
      title: "Swiming Pool Day",
      date: "@bkristastucchio",
    },

    {
      img: kc16,
      title: "Annual Function Day",
      date: "@bkristastucchio",
    },
    {
      img: kc09,
      title: "Annual Function Day",
      date: "@bkristastucchio",
    },
    {
      img: kc17,
      title: "Annual Function Day",
      date: "@bkristastucchio",
    },
    {
      img: kc18,
      title: "Annual Function Day",
      date: "@bkristastucchio",
    },
    {
      img: kc11,
      title: "Kids Corner's Play Area",
      date: "@bkristastucchio",
    },
    {
      img: kc12,
      title: "Kids Corner's Class Room",
      date: "@bkristastucchio",
    },
    {
      img: kc13,
      title: "Kids Corner School",
      date: "@bkristastucchio",
    },
  ];
  return (
    <Box>
      <NavBar position={"static"} />
      <ImageList
        cols={3}
        sx={{
          mt: 9,
          mb: 4,
        }}
      >
        {imageList.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Typography
                  ml={0.5}
                  color={"#E57C23"}
                  fontWeight={"bold"}
                  fontFamily={"-apple-system"}
                  fontSize={20}
                >
                  {item.title}
                </Typography>
              }
              // subtitle={<span>by: {"item.author"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Footer />
    </Box>
  );
}
