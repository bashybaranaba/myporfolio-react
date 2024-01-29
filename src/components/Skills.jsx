import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import Skill from "./Skill";

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));

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

export default function Skills() {
  return (
    <Container component="main" maxWidth="md">
      <StyledGrid>
        <HeadingTypography variant="h2">
          Skills, Tools and Technologies
        </HeadingTypography>
      </StyledGrid>

      <StyledGrid>
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
      </StyledGrid>
      <StyledGrid>
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
      </StyledGrid>
      <StyledGrid>
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
      </StyledGrid>
    </Container>
  );
}
