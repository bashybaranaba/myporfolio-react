import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";

const projects = [
  {
    title: "Arttribute",
    imagePath: "assets/images/arttribute.png",
    description:
      "Artributes enables visual artists to create AI models that mirror their styles ",
    link: "https://arttribute.io/",
  },
  {
    title: "JamiiLab",
    imagePath: "assets/images/jamiilab.png",
    description:
      "A decentralized citizen science platform for collecting and sharing data.",
    link: "https://jamiilab.vercel.app/",
  },
  {
    title: "Elimu Dao",
    imagePath: "assets/images/elimudao.png",
    description: "Elimu DAO is a blockchain-powered e-learning platfrom",
    link: "https://elimu-dao.vercel.app/",
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
