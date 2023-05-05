import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";

export default function AboutUs() {
  return (
    <Box mt={9}>
      <NavBar posittion={"static"} />
      <Typography>Know about Kids Corner</Typography>
    </Box>
  );
}
