import * as React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Grid, Typography } from "@mui/material";

const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "24px",
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "transform 0.2s ease-in-out",
  },
});

const StyledAvatar = styled(Avatar)({
  width: 56,
  height: 56,
});

const StyledTypography = styled(Typography)({
  fontWeight: 500,
});

export default function Skill({ skillIcon, skillName }) {
  return (
    <StyledGrid>
      <StyledAvatar src={skillIcon} />
      <StyledTypography variant="body1" component="div">
        {skillName}
      </StyledTypography>
    </StyledGrid>
  );
}
