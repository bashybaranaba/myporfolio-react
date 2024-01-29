import * as React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Typography, Box, Grid, Container } from "@mui/material";
import TypingAnimator from "react-typing-animator";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";

const StyledAvatar = styled(Avatar)({
  width: 160,
  height: 160,
});

const HeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: theme.spacing(5.2),
  marginLeft: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    fontSize: theme.spacing(8),
    marginLeft: 0,
  },
}));

const SubHeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: "flex",
  fontSize: theme.spacing(3), // Equivalent to 1.5rem
  marginLeft: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    fontSize: theme.spacing(4.6), // Equivalent to 2.3rem
    marginLeft: 0,
  },
}));

const InfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(1),
  borderRadius: "10px",
  border: `1px solid #0097a7`,
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const InfoHorizontalBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(1),
  borderRadius: "10px",
  border: `1px solid #0097a7`,
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const IconTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(2),
  fontSize: theme.spacing(1.6),
  fontWeight: 500,
  [theme.breakpoints.up("md")]: {
    marginLeft: 0,
    fontSize: theme.spacing(2),
  },
}));

const IconHorizontalTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(2),
  fontSize: theme.spacing(1.6),
  fontWeight: 500,
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    fontSize: theme.spacing(2),
  },
}));

const TypeBoxLg = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const TypeBoxSm = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function About() {
  return (
    <Container component="main" maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <StyledAvatar alt="Baranaba Mugabane" src="assets/images/me.jpeg" />
        </Grid>
        <Grid item xs={12} md={9}>
          <HeadingTypography variant="h2" component="div">
            Hi, I'm Baranaba 👋
          </HeadingTypography>
          <SubHeadingTypography variant="h4" component="div">
            {"👨🏾‍💻 I am a passionate" + " "}
            <TypeBoxLg>
              <TypingAnimator
                textArray={[" Developer", " Artist", " Designer"]}
                cursorColor="#333"
                textColor="black"
                fontSize={"38px"}
                loop
                typingSpeed={60}
                delaySpeed={1000}
                backspace
                height="60px"
              />
            </TypeBoxLg>
            <TypeBoxSm>
              <TypingAnimator
                textArray={[" Developer", " Artist", " Designer"]}
                cursorColor="#333"
                textColor="black"
                fontSize={"24px"}
                loop
                typingSpeed={60}
                delaySpeed={1000}
                backspace
                height="60px"
              />
            </TypeBoxSm>
          </SubHeadingTypography>
        </Grid>

        <Grid item xs={12} md={6}>
          <InfoBox>
            <SchoolOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
            <IconTypography variant="subtitle1" component="div">
              Just finished my bachelors degree in Informatics and Computer
              Science at Strathmore University
            </IconTypography>
          </InfoBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoBox>
            <AccountBalanceOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
            <IconTypography variant="subtitle1" component="div">
              Previously engaged in software development roles at Ilab Africa
              and Strathmore Research & Consultancy Center
            </IconTypography>
          </InfoBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <InfoHorizontalBox>
            <InterestsOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
            <IconHorizontalTypography variant="subtitle1" component="div">
              Currently exploring the intersection of Decentralized technologies
              and Machine Learning
            </IconHorizontalTypography>
          </InfoHorizontalBox>
        </Grid>
      </Grid>
    </Container>
  );
}
