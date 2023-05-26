import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";
import kcQR from "../assets/kc-qr.png";
import Footer from "./Footer";

export default function ContactUs() {
  return (
    <Box>
      <NavBar position={"static"} />
      <Box
        sx={{
          mt: 10,
          mb: 6,
          ml: 8,
          mr: 8,
        }}
      >
        <Stack spacing={4} justifyContent={"space-around"}>
          <Stack alignItems={"center"} spacing={1}>
            <Typography color={"#E57C23"} fontWeight={"bold"} fontSize={20}>
              Scan QR code below
            </Typography>
            <img
              src={kcQR}
              srcSet={kcQR}
              alt={"kc-qr"}
              loading="lazy"
              style={{
                width: "400px",
                height: "400px",
              }}
            />
          </Stack>
          <Stack alignItems={"center"} spacing={1}>
            <Typography color={"#E57C23"} fontWeight={"bold"} fontSize={20}>
              Google Map Location For Kids Corner
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.6725920217204!2d75.46707137519897!3d22.214545579748265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39626ee588fd0f47%3A0x883ab1e6d18c0b26!2sKids%20Corner%20playway%20School!5e0!3m2!1sen!2sin!4v1685105425367!5m2!1sen!2sin"
              width="550"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
          {/* <Stack alignItems={"center"} spacing={1}>
            <Typography color={"#E57C23"} fontWeight={"bold"}>
              Contact Details
            </Typography>
            <Typography color={"#E57C23"} fontWeight={"bold"} textAlign={"center"}>
            Address: 6F79+RV6, Muktanand Parisar, Dhamnod, Madhya Pradesh 454552
            </Typography>
            <Typography color={"#E57C23"} fontWeight={"bold"}>
            Mobile Number: +91-9876543210
            </Typography>
            <Typography color={"#E57C23"} fontWeight={"bold"}>
            Email Address: principal@gmail.com
            </Typography>
          </Stack> */}
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
