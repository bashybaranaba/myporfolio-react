import React, { useState, useEffect } from "react";
import {
  Box,
  CardActionArea,
  IconButton,
  Card,
  CardMedia,
  MobileStepper,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ProjectCarousel = ({ projects }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 1500); // Change slide every 3 seconds
    return () => {
      clearInterval(timer);
    };
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % projects.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) =>
        (prevActiveStep - 1 + projects.length) % projects.length
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleBack}>
          <ArrowBackIos />
        </IconButton>

        <Box sx={{ pr: 14, pl: 14, pt: 6, pb: 4 }}>
          <Card raised sx={{ borderRadius: 4 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={projects[activeStep].imagePath}
                alt={projects[activeStep].label}
              />
            </CardActionArea>
          </Card>
        </Box>

        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </div>
      <MobileStepper
        variant="dots"
        steps={projects.length}
        position="static"
        activeStep={activeStep}
        sx={{ p: 2 }}
      />
    </>
  );
};

export default ProjectCarousel;
