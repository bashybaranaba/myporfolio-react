import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Contact from "./Contact";

export default function Contacts() {
  return (
    <Container component="main" maxWidth="md">
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            mb: 2,
            fontSize: { xs: "2rem", md: "2.5rem" },
            ml: { xs: 2, md: 0 },
          }}
        >
          Get in touch
        </Typography>
      </Grid>
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
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
      </Grid>
    </Container>
  );
}
