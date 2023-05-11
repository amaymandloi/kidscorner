import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import { Box } from "@mui/material";
import kc01 from "../assets/kc01.jpg";
import kc02 from "../assets/kc02.jpg";
import kc03 from "../assets/kc03.jpg";
import kc04 from "../assets/kc04.jpg";
import kc05 from "../assets/kc05.jpg";

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
