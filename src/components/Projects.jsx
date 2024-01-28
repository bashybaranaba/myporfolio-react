import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ProjectCarousel from "./ProjectCarousel";

const projects = [
  { title: "Arttribute", imagePath: "assets/images/arttribute.png" },
  { title: "JamiiLab", imagePath: "assets/images/jamiilab.png" },
  { title: "Elimu Dao", imagePath: "assets/images/elimudao.png" },
];

export default function Projects() {
  return (
    <Container component="main" maxWidth="md">
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2rem", md: "2.5rem" },
            ml: { xs: 2, md: 0 },
          }}
        >
          Some of my Projects
        </Typography>
      </Grid>
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <ProjectCarousel projects={projects} />
      </Grid>
    </Container>
  );
}
