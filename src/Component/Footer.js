import { EmailRounded, PhoneInTalkRounded } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        height: 200,
        bgcolor: "#80cf7f",
        position: "relative",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        p={"20px"}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#f9f871"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Our Location
          </Typography>
          <Typography color={"#f9f871"} fontWeight={"bold"} variant="body1">
            6F79+RV6, Muktanand Parisar, Dhamnod, Madhya Pradesh 454552
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#f9f871"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Contact
          </Typography>
          <Stack direction={"row"}>
            <PhoneInTalkRounded
              sx={{
                color: "#f9f871",
              }}
            />
            <Typography
              color={"#f9f871"}
              fontWeight={"bold"}
              variant="body1"
              ml={1}
            >
              +91-9876543210
            </Typography>
          </Stack>
          <Stack direction={"row"} mt={1}>
            <EmailRounded
              sx={{
                color: "#f9f871",
              }}
            />
            <Typography
              color={"#f9f871"}
              fontWeight={"bold"}
              variant="body1"
              ml={1}
            >
              principal@gmail.com
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#f9f871"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Follow Us on
          </Typography>
        </Grid>
      </Grid>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={40}
        width={"100%"}
        bgcolor={"#008080"}
        position={"absolute"}
        bottom={0}
      >
        <Typography
          color={"white"}
          variant="subtitle1"
          fontWeight={"bold"}
          ml={2}
        >
          © Copyright Kids Corner
        </Typography>
        <Typography color={"white"} mr={2}>
          Developed with ♥ by DuoDevelopers
        </Typography>
      </Stack>
    </Box>
  );
}
