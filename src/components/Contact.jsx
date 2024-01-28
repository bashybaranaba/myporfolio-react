import * as React from "react";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Contact({ contactIcon, contactName, contactLink }) {
  return (
    <a
      href={contactLink}
      target="_blank"
      style={{ textDecoration: "none", color: "black" }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: 3,
          mr: 6,
          "&:hover": {
            transform: "translateY(-5px)",
            transition: "transform 0.2s ease-in-out",
          },
        }}
      >
        <Avatar src={contactIcon} sx={{ width: 50, height: 50 }} />

        <Typography variant="body1" component="div" sx={{ fontWeight: 500 }}>
          {contactName}
        </Typography>
      </Grid>
    </a>
  );
}
