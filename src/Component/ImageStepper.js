import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import { Box } from "@mui/material";
import kc01 from "../assets/homeImages/kc01.png";
import kc02 from "../assets/homeImages/kc02.png";
import kc03 from "../assets/homeImages/kc03.png";
import kc04 from "../assets/homeImages/kc04.png";
import kc05 from "../assets/homeImages/kc05.png";
import kc06 from "../assets/homeImages/kc06.png";
import kc07 from "../assets/homeImages/kc07.png";
import kc08 from "../assets/homeImages/kc08.png";
import kc09 from "../assets/homeImages/kc09.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "kidsCorner-1",
    imgPath: kc01,
  },
  {
    label: "kidsCorner-2",
    imgPath: kc02,
  },
  {
    label: "kidsCorner-3",
    imgPath: kc03,
  },
  {
    label: "kidsCorner-4",
    imgPath: kc04,
  },
  {
    label: "kidsCorner-5",
    imgPath: kc05,
  },
  {
    label: "kidsCorner-5",
    imgPath: kc06,
  },
  {
    label: "kidsCorner-5",
    imgPath: kc07,
  },
  {
    label: "kidsCorner-5",
    imgPath: kc08,
  },
  {
    label: "kidsCorner-5",
    imgPath: kc09,
  },
];

export default function ImageStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box bgcolor={"#ffffff"} mt={-9} sx={{
      height:"70%",
      width:"100%"
    }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div
            key={step.label}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null} */}
            <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
          </div>
       
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      /> */}
    </Box>
  );
}
