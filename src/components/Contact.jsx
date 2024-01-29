import * as React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Typography, Grid } from "@mui/material";

const StyledLink = styled("a")({
  textDecoration: "none",
  color: "black",
});

const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "24px",
  marginRight: "48px",
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "transform 0.2s ease-in-out",
  },
});

const StyledAvatar = styled(Avatar)({
  width: 50,
  height: 50,
});

const StyledTypography = styled(Typography)({
  fontWeight: 500,
});

export default function Contact({ contactIcon, contactName, contactLink }) {
  return (
    <StyledLink href={contactLink} target="_blank">
      <StyledGrid>
        <StyledAvatar src={contactIcon} />
        <StyledTypography variant="body1" component="div">
          {contactName}
        </StyledTypography>
      </StyledGrid>
    </StyledLink>
  );
}
