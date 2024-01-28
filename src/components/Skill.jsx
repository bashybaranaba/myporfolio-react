import * as React from "react";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Skill({ skillIcon, skillName }) {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
        "&:hover": {
          transform: "translateY(-5px)",
          transition: "transform 0.2s ease-in-out",
        },
      }}
    >
      <Avatar src={skillIcon} sx={{ width: 56, height: 56 }} />

      <Typography variant="body1" component="div" sx={{ fontWeight: 500 }}>
        {skillName}
      </Typography>
    </Grid>
  );
}
