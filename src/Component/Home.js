import React from "react";
import NavBar from "./Navbar";
import { Box, Typography } from "@mui/material";
import ImageStepper from "./ImageStepper";

export default function Home() {
  return (
    <Box>
      <NavBar />
      {/* <Typography
        sx={{
          m: 3,
          textAlign: "center",
        }}
        variant="h4"
        fontWeight={"bold"}
      >
        Welcome to Kids Corner School Dhamnod
      </Typography> */}
      <ImageStepper/>
    </Box>
  );
}
