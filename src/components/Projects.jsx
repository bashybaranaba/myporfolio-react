import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";

const projects = [
  { title: "Arttribute", imagePath: "assets/images/arttribute.png" },
  { title: "JamiiLab", imagePath: "assets/images/jamiilab.png" },
  { title: "Elimu Dao", imagePath: "assets/images/elimudao.png" },
];

const StyledGrid = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const HeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: theme.spacing(4),
  marginLeft: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    fontSize: theme.spacing(5),
    marginLeft: 0,
  },
}));

export default function Projects() {
  return (
    <Container component="main" maxWidth="md" id="projects">
      <StyledGrid>
        <HeadingTypography variant="h2">Some of my Projects</HeadingTypography>
      </StyledGrid>
      <StyledGrid>
        <ProjectCarousel projects={projects} />
      </StyledGrid>
    </Container>
  );
}
