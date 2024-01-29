import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  CardActionArea,
  IconButton,
  Card,
  CardMedia,
  MobileStepper,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const StyledBox = styled(Box)({
  paddingRight: "112px",
  paddingLeft: "112px",
  paddingTop: "48px",
  paddingBottom: "32px",
});

const StyledCard = styled(Card)({
  borderRadius: "10px",
});

const StyledCarouselContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledMobileStepper = styled(MobileStepper)({
  padding: "16px",
});

const ProjectCarousel = ({ projects }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 1500);
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
      <StyledCarouselContainer>
        <IconButton onClick={handleBack}>
          <ArrowBackIos />
        </IconButton>

        <StyledBox>
          <StyledCard raised>
            <CardActionArea>
              <CardMedia
                component="img"
                image={projects[activeStep].imagePath}
                alt={projects[activeStep].label}
              />
            </CardActionArea>
          </StyledCard>
        </StyledBox>

        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </StyledCarouselContainer>
      <StyledMobileStepper
        variant="dots"
        steps={projects.length}
        position="static"
        activeStep={activeStep}
      />
    </>
  );
};

export default ProjectCarousel;
