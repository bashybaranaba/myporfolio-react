import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import Contact from "./Contact";

const StyledGrid = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const HeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(2),
  fontSize: theme.spacing(4), // Equivalent to 2rem
  marginLeft: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    fontSize: theme.spacing(5), // Equivalent to 2.5rem
    marginLeft: 0,
  },
}));

export default function Contacts() {
  return (
    <Container component="main" maxWidth="md">
      <StyledGrid>
        <HeadingTypography variant="h3">Get in touch</HeadingTypography>
      </StyledGrid>
      <StyledGrid>
        <Contact
          contactName="LinkedIn"
          contactIcon="https://img.icons8.com/color/48/000000/linkedin.png"
          contactLink="https://www.linkedin.com/in/baranaba-mugabane-107655153/"
        />
        <Contact
          contactName="GitHub"
          contactIcon="https://img.icons8.com/fluency/48/github.png"
          contactLink="https://github.com/bashybaranaba"
        />
        <Contact
          contactName="Email"
          contactIcon="https://img.icons8.com/color/48/000000/gmail-new.png"
          contactLink="mailto:bashybaranaba@gmail.com"
        />
      </StyledGrid>
    </Container>
  );
}
