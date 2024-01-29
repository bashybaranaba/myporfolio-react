import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";

const projects = [
  {
    title: "Arttribute",
    imagePath: "assets/images/arttribute.png",
    description:
      "Arttribute is a platform that allows artists to showcase their work and sell it as NFTs. It is built on the Ethereum blockchain and uses IPFS for storage.",
  },
  {
    title: "JamiiLab",
    imagePath: "assets/images/jamiilab.png",
    description:
      "JamiiLab is a platform that allows users to create and participate in online courses. It is built using the MERN stack.",
  },
  {
    title: "Elimu Dao",
    imagePath: "assets/images/elimudao.png",
    description:
      "Elimu Dao is a platform that allows users to create and participate in online courses. It is built using the MERN stack.",
  },
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
