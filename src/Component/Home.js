import React from "react";
import NavBar from "./Navbar";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ImageStepper from "./ImageStepper";
import Footer from "./Footer";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar posittion={"fixed"} />
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
      <ImageStepper />
      <Box sx={{ flexGrow: 1, m: 3 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12}>
            <Typography
              mb={2}
              variant="h5"
              fontWeight={"bold"}
              color={"#0C134F"}
            >
              Dear Parents and Students,
            </Typography>
            <Typography variant="body1" fontSize={20}>
              Welcome to Kids Corner, a school dedicated to providing the
              highest quality education to children from diverse backgrounds.
              Our mission is to create a safe and supportive environment that
              fosters the growth and development of each student academically,
              socially, and emotionally.
            </Typography>
            <br/>
            <Typography variant="body1" fontSize={20}>
              At Kids Corner, we believe that every child is unique and has
              their own strengths, interests, and learning style. Our curriculum
              is designed to cater to individual needs and abilities, with a
              focus on inquiry-based learning, critical thinking, and
              creativity. We also prioritize the development of essential life
              skills such as communication, collaboration, and problem-solving,
              which are essential for success in the 21st century.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </Box>
  );
}
