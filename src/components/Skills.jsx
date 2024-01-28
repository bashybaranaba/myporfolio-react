import * as React from "react";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Skill from "./Skill";

export default function Skills() {
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
          Skills, Tools and Technologies
        </Typography>
      </Grid>
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Skill
          skillName="TypeScript"
          skillIcon="https://img.icons8.com/fluency/48/typescript--v1.png"
        />
        <Skill
          skillName="JavaScript"
          skillIcon="https://img.icons8.com/color/48/000000/javascript--v1.png"
        />
        <Skill
          skillName="Python"
          skillIcon="https://img.icons8.com/color/48/000000/python--v1.png"
        />
        <Skill
          skillName="C++"
          skillIcon="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
        />
        <Skill
          skillName="Java"
          skillIcon="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
        />
        <Skill
          skillName="Solidity"
          skillIcon="https://img.icons8.com/color/48/000000/solidity.png"
        />
      </Grid>
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Skill
          skillName="React"
          skillIcon="https://img.icons8.com/color/48/000000/react-native.png"
        />
        <Skill
          skillName="Next js"
          skillIcon="https://img.icons8.com/fluency/48/nextjs.png"
        />
        <Skill
          skillName="Nest js"
          skillIcon="https://img.icons8.com/color/48/000000/nestjs.png"
        />
        <Skill
          skillName="Node js"
          skillIcon="https://img.icons8.com/color/48/000000/nodejs.png"
        />
        <Skill
          skillName="Material UI"
          skillIcon="https://img.icons8.com/color/48/000000/material-ui.png"
        />
        <Skill
          skillName="Tailwind CSS"
          skillIcon="https://img.icons8.com/color/48/tailwind_css.png"
        />
        <Skill
          skillName="Figma"
          skillIcon="https://img.icons8.com/color/48/000000/figma--v1.png"
        />
      </Grid>
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* Firebase, MongoDb, Postgress */}
        <Skill
          skillName="Firebase"
          skillIcon="https://img.icons8.com/color/48/000000/firebase.png"
        />
        <Skill
          skillName="MongoDB"
          skillIcon="https://img.icons8.com/color/48/000000/mongodb.png"
        />
        <Skill
          skillName="PostgreSQL"
          skillIcon="https://img.icons8.com/color/48/000000/postgreesql.png"
        />
      </Grid>
    </Container>
  );
}
