import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import kc03 from "../assets/galleryImage/kc01.png";

export default function AboutUs() {
  return (
    <Box>
      <NavBar position={"static"} />
      <Box sx={{ flexGrow: 1, mt: 10, mb: 10, ml: 8, mr: 8 }}>
        <Typography
          mb={2}
          variant="h5"
          fontWeight={"bold"}
          color={"#0C134F"}
          fontSize={28}
        >
          Know about Kids Corner School
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Stack direction={"column"} spacing={2}  sx={{
              display: { xs: "none", md: "flex" },
              width:{
                xs:"100%", md:"60%"
              }
            }}>
            <Typography
              variant="body1"
              fontSize={18}
              gutterBottom
              align="justify"
            >
              Kids Corner is a primary school that caters to children in their
              early years. Our school is located in a safe and vibrant
              community, and we offer a nurturing and supportive learning
              environment that is specifically designed to meet the unique needs
              of young children.
            </Typography>
            <Typography
              variant="body1"
              fontSize={18}
              gutterBottom
              align="justify"
            >
              We believe that education is a collaborative effort between the
              school, parents, and the wider community. We encourage parental
              involvement in school activities and events and work closely with
              families to ensure that every student has the support they need to
              succeed.
            </Typography>
            <Typography variant="body1" fontSize={18} align="justify">
              We strive to create a positive and inclusive environment where
              children feel valued and respected, and where diversity is
              celebrated. Our school community is supportive and collaborative,
              and we encourage parental involvement in all aspects of school
              life.
            </Typography>
          </Stack>
          <Box
            component="img"
            src={kc03}
            alt={"Kids Corner"}
            width={"40%"}
            height={"300px"}
            sx={{
              width:{
                xs:"100%", md:"40%"
              }
            }}
          />
        </Stack>

        <br />
        <Typography variant="body1" fontSize={18} align="justify">
          At Kids Corner, we believe that every child is special and has their
          own unique strengths and abilities. Our curriculum is carefully
          crafted to cater to the diverse learning styles of our students, with
          a focus on promoting inquiry-based learning, critical thinking, and
          creativity. Our experienced and dedicated faculty members are
          passionate about teaching young children and are committed to creating
          a positive and engaging learning environment. They use a variety of
          teaching techniques and tools to help students learn and grow, and
          they work closely with parents to ensure that every child receives the
          support they need to succeed.
        </Typography>
        <br />
        <Typography variant="body1" fontSize={18} align="justify">
          In addition to our academic program, Kids Corner offers a range of
          extracurricular activities, including sports, arts and crafts, and
          music lessons. These activities are designed to help students explore
          their interests and develop their talents, while also promoting
          teamwork, communication, and other important life skills.
        </Typography>
        <br />
        <Typography variant="body1" fontSize={18} align="justify">
          At Kids Corner, we believe that education is a collaborative effort
          between the school, parents, and the wider community. We encourage
          parental involvement in school activities and events and work closely
          with families to ensure that every child receives the support they
          need to thrive.
        </Typography>
        <br />
        <Typography variant="body1" fontSize={18} align="justify">
          Overall, Kids Corner is a wonderful place for young children to learn,
          grow, and develop into confident and capable individuals.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
}
