import { EmailRounded, PhoneInTalkRounded } from "@mui/icons-material";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        p={"20px"}
        bgcolor={"#E57C23"}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#fff"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Our Location
          </Typography>
          <Typography color={"#fff"} fontWeight={"bold"} variant="body1">
            6F79+RV6, Muktanand Parisar, Dhamnod, Madhya Pradesh 454552
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#fff"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Contact
          </Typography>
          <Stack direction={"row"}>
            <PhoneInTalkRounded
              sx={{
                color: "#fff",
              }}
            />
            <Typography
              color={"#fff"}
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
                color: "#fff",
              }}
            />
            <Typography
              color={"#fff"}
              fontWeight={"bold"}
              variant="body1"
              ml={1}
            >
              principal@gmail.com
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={2} sm={4} md={4}>
          <Typography
            color={"#fff"}
            variant="h5"
            fontSize={22}
            fontWeight={"bold"}
          >
            Follow Us on
          </Typography>
        </Grid> */}
      </Grid>
      <Divider
        sx={{
          height: 1,
          bgcolor: "#fff",
        }}
      />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"100%"}
        bgcolor={"#E57C23"}
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
